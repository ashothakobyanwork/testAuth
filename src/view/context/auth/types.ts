import {
  ErrorWithFields,
  TokenPair,
  User,
} from '~/apollo/__generated__/resolvers-types';
import {CreateTokensQueryVariables} from '~/apollo/graphql/queries/signIn.generated';

export type TAuthContext = {
  isLoading: boolean;
  checkingAuth: boolean;
  isAuthenticated: boolean;
  me: Nullable<Partial<User>>;
  onSignIn: (
    _payload: CreateTokensQueryVariables,
    _onFail?: (error: ErrorWithFields) => void,
    _onSuccess?: (data: TokenPair) => void,
  ) => void;
  onSignOut: () => void;
};
