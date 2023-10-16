import {ErrorStatus} from '~/apollo/__generated__/resolvers-types';

export const formErrors = {
  REQUIRED: 'Это обязательное поле',
  INVALID_PHONE_NUMBER: 'Неправильный номер телефона',
};
export const responseErrors: Record<ErrorStatus, string> = {
  [ErrorStatus.AlreadyDone]: 'Уже сделано',
  [ErrorStatus.AlreadyExist]: 'Уже существует',
  [ErrorStatus.InvalidInputData]: 'Неверные  данные',
  [ErrorStatus.NotAuthenticated]: 'Не авторизован',
  [ErrorStatus.NotEnoughPermissions]: 'Недостаточно разрешений',
  [ErrorStatus.NotFound]: 'Не найдено',
};
