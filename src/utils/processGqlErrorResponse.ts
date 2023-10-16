import {ErrorStatus} from '~/apollo/__generated__/resolvers-types';
import {responseErrors} from '~/constants/form';

interface ShowValidationErrorOptions<TFormValues> {
  error: ErrorStatus;
  errorFields: string[];
  fields?: Array<keyof TFormValues>;
  setFieldError?: (name: keyof TFormValues, value: string) => void;
  setErrorInCase?: () => void;
}

export function processGqlErrorResponse<TFormValues>({
  fields = [],
  errorFields,
  error,
  setFieldError,
  setErrorInCase,
}: ShowValidationErrorOptions<TFormValues>): void {
  if (errorFields?.length) {
    fields?.forEach(field => {
      if (errorFields.includes(field as string) && setFieldError) {
        setFieldError(field, responseErrors[error]);
      }
    });
  } else if (setErrorInCase) {
    setErrorInCase();
  }
}
