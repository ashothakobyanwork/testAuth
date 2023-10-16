import {useCallback, useMemo} from 'react';
import {UseFormHandleSubmit, UseFormReturn, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import * as yup from 'yup';
import {formErrors} from '~/constants/form';
import {PhoneNumberUtil} from 'google-libphonenumber';
import {useNavigation} from '@react-navigation/native';
import {useCreateTokensLazyQuery} from '~/apollo/graphql/queries/signIn.generated';
import {logger} from '~/utils/logger';
import {processGqlErrorResponse} from '~/utils/processGqlErrorResponse';

interface UseSignInFormValues {
  login: string;
  password: string;
}
interface UseSignInPhoneReturnType {
  isLoading: boolean;
  form: UseFormReturn<UseSignInFormValues>;
  handleSubmit: ReturnType<UseFormHandleSubmit<UseSignInFormValues>>;
}

const defaultValues: UseSignInFormValues = {
  login: '',
  password: '',
};
const phoneNumberUtil = PhoneNumberUtil.getInstance();

const validation = yup.object({
  login: yup
    .string()
    .required(formErrors.REQUIRED)
    .test('invalidPhoneNumber', formErrors.INVALID_PHONE_NUMBER, value => {
      if (!value.startsWith('+')) {
        return true;
      }
      if (!value || !/^\+\d+$/.test(value)) {
        return false;
      }
      try {
        const phone = phoneNumberUtil.parse(value);
        return phoneNumberUtil.isValidNumber(phone);
      } catch (e) {
        return false;
      }
    }),
  password: yup.string().required(formErrors.REQUIRED),
});

export function useSignInForm(): UseSignInPhoneReturnType {
  const form = useForm<UseSignInFormValues>({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(validation),
  });
  const navigation = useNavigation();
  const [signIn, {loading}] = useCreateTokensLazyQuery({
    fetchPolicy: 'network-only',
  });

  const handleSubmit = useCallback(
    async (values: UseSignInFormValues) => {
      try {
        const {data} = await signIn({
          variables: values,
        });
        if (data?.createTokens.__typename === 'ErrorWithFields') {
          processGqlErrorResponse<UseSignInFormValues>({
            fields: ['login', 'password'],
            errorFields: data.createTokens.fields,
            error: data.createTokens.status,
            setFieldError: (name, message) => form.setError(name, {message}),
          });
        } else if (data?.createTokens.__typename === 'TokenPair') {
          const response = data?.createTokens;
        }
      } catch (e) {
        logger.warn(e);
      }
      // navigation.navigate(RootStackRouts.Tabs, {screen: TabsStackRouts.Home});
    },
    [form, signIn],
  );

  return useMemo(
    () => ({
      isLoading: loading,
      form,
      handleSubmit: form.handleSubmit(handleSubmit),
    }),
    [form, handleSubmit, loading],
  );
}
