import {useCallback, useMemo} from 'react';
import {UseFormHandleSubmit, UseFormReturn, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import * as yup from 'yup';
import {formErrors} from '~/constants/form';
import {PhoneNumberUtil} from 'google-libphonenumber';
import {useNavigation} from '@react-navigation/native';

interface UseSignInFormValues {
  phoneOrLogin: string;
  password: string;
}
interface UseSignInPhoneReturnType {
  isLoading: boolean;
  form: UseFormReturn<UseSignInFormValues>;
  handleSubmit: ReturnType<UseFormHandleSubmit<UseSignInFormValues>>;
}

const defaultValues: UseSignInFormValues = {
  phoneOrLogin: '',
  password: '',
};
const phoneNumberUtil = PhoneNumberUtil.getInstance();

const validation = yup.object({
  phoneOrLogin: yup
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

  const handleSubmit = useCallback(async (values: UseSignInFormValues) => {
    console.log(values, 'values');
  }, []);

  return useMemo(
    () => ({
      isLoading: false,
      form,
      handleSubmit: form.handleSubmit(handleSubmit),
    }),
    [form, handleSubmit],
  );
}
