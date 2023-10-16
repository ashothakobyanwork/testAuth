import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {
  getStorageValue,
  removeStorageValue,
  setStorageValue,
} from '~/utils/storage';
import {TAuthContext} from './types';
import {useCreateTokensLazyQuery} from '~/apollo/graphql/queries/signIn.generated';
import {ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY} from '~/constants/auth';
import {logger} from '~/utils/logger';
import {useGetMeLazyQuery} from '~/apollo/graphql/queries/me.generated';

export const AuthContext = createContext<TAuthContext>({
  me: null,
  isLoading: false,
  checkingAuth: false,
  isAuthenticated: false,
  onSignIn: () => undefined,
});

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [me, setMe] = useState<TAuthContext['me']>(null);
  const [isAuthenticated, setIsAuthenticated] =
    useState<TAuthContext['isAuthenticated']>(false);

  const [fetchMe, {loading: meLoading}] = useGetMeLazyQuery({
    fetchPolicy: 'network-only',
    onCompleted: res => {
      if (res.getMe.__typename === 'User') {
        setIsAuthenticated(true);
        setMe(res.getMe);
      }
    },
  });

  const [signIn, {loading: signInLoading}] = useCreateTokensLazyQuery({
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    const getToken = async () => {
      const token = await getStorageValue(ACCESS_TOKEN_KEY, undefined);

      if (token && !me) {
        fetchMe();
      }
    };
    getToken();
  }, [fetchMe, me]);

  const onSignIn: TAuthContext['onSignIn'] = useCallback(
    (payload, _onFail, _onSuccess) => {
      signIn({
        variables: payload,
        onCompleted: res => {
          if (res.createTokens.__typename === 'TokenPair') {
            setStorageValue(
              ACCESS_TOKEN_KEY,
              `Bearer ${res?.createTokens?.accessToken}`,
            );
            setStorageValue(REFRESH_TOKEN_KEY, res.createTokens.refreshToken);
            fetchMe();
            if (_onSuccess) {
              _onSuccess(res.createTokens);
            }
          } else if (res.createTokens.__typename === 'ErrorWithFields') {
            if (_onFail) {
              _onFail(res.createTokens);
            }
          }
        },
        onError: error => {
          logger.warn(error);
        },
      });
    },
    [fetchMe, signIn],
  );

  const onSignOut = useCallback((callback?: () => void) => {
    removeStorageValue(ACCESS_TOKEN_KEY);
    removeStorageValue(REFRESH_TOKEN_KEY);
    setIsAuthenticated(false);
    callback?.();
  }, []);

  // @ts-ignore
  global.signOut = onSignOut;

  const value: TAuthContext = useMemo(
    () => ({
      isAuthenticated,
      isLoading: signInLoading,
      checkingAuth: meLoading,
      me,
      onSignIn,
    }),
    [isAuthenticated, signInLoading, meLoading, me, onSignIn],
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
