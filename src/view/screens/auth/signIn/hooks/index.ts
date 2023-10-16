import {useCallback, useMemo} from 'react';
import {UseFormHandleSubmit, UseFormReturn, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import * as yup from 'yup';
import {formErrors} from '~/constants/form';
import {PhoneNumberUtil} from 'google-libphonenumber';
import {useNavigation} from '@react-navigation/native';
import {logger} from '~/utils/logger';
import {processGqlErrorResponse} from '~/utils/processGqlErrorResponse';
import {useAuth} from '~/view/hooks/useAuth';
import {RootStackRouts} from '~/view/navigation/appNavigator/types';
import {TabsStackRouts} from '~/view/navigation/tabBar/types';

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
  const {onSignIn, isLoading} = useAuth();

  const handleSubmit = useCallback(
    async (values: UseSignInFormValues) => {
      try {
        onSignIn(
          values,
          error =>
            processGqlErrorResponse<UseSignInFormValues>({
              fields: ['login', 'password'],
              errorFields: error.fields,
              error: error.status,
              setFieldError: (name, message) => form.setError(name, {message}),
            }),
          () => {
            navigation.navigate(RootStackRouts.Tabs, {
              screen: TabsStackRouts.Home,
            });
          },
        );
      } catch (e) {
        logger.warn(e);
      }
    },
    [form, navigation, onSignIn],
  );

  return useMemo(
    () => ({
      isLoading,
      form,
      handleSubmit: form.handleSubmit(handleSubmit),
    }),
    [form, handleSubmit, isLoading],
  );
}
