import React from 'react';
import {Control, FieldPath, FieldValues, useController} from 'react-hook-form';
import {FieldPathValue} from 'react-hook-form/dist/types';
import {StyleProp, TextInputProps, TextStyle, ViewStyle} from 'react-native';

import {Field, TextInput} from '~/view/components';
import {FieldProps} from '../Field';

type InputValue = string;

interface Props<
  TFormValues extends FieldValues,
  TName extends FieldPath<TFormValues>,
> extends Omit<TextInputProps, 'style'>,
    Pick<FieldProps, 'rightItemElement'> {
  name: FieldPathValue<TFormValues, TName> extends InputValue ? TName : never;
  control: Control<TFormValues>;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
}

const TextField = <
  TFormValues extends FieldValues,
  TName extends FieldPath<TFormValues>,
>({
  name,
  control,
  style,
  rightItemElement,
  inputStyle: inputStyle,
  ...textInputProps
}: Props<TFormValues, TName>): React.ReactElement => {
  const controller = useController({name, control});
  console.log(controller.fieldState.error, 'controller.fieldState.error');

  return (
    <Field
      {...{
        rightItemElement,
        style,
      }}
      error={controller.fieldState.error}>
      <TextInput
        value={controller.field.value}
        onChangeText={controller.field.onChange}
        onBlur={controller.field.onBlur}
        error={!!controller.fieldState.error}
        inputStyle={inputStyle}
        {...textInputProps}
      />
    </Field>
  );
};

export default TextField;
