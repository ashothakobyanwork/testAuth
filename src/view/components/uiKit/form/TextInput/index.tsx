import React, {FC, useState} from 'react';
import {
  StyleProp,
  TextInput as BaseTextInput,
  TextInputProps,
  TextStyle,
} from 'react-native';

import {theme} from '~/view/styles/theme';
import styles from './styles';

export type Props = {
  error?: boolean;
  disabled?: boolean;
  inputStyle?: StyleProp<TextStyle>;
} & TextInputProps;

const TextInput: FC<Props> = ({style, disabled, ...textInputProps}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus: TextInputProps['onFocus'] = e => {
    textInputProps.onFocus?.(e);
    setIsFocused(true);
  };

  const handleBlur: TextInputProps['onBlur'] = e => {
    textInputProps.onBlur?.(e);
    setIsFocused(false);
  };

  return (
    <>
      <BaseTextInput
        autoCapitalize="none"
        style={[styles.main, isFocused && styles.focusedTextInput, style]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        editable={!disabled}
        selectionColor={theme.colors.primary}
        placeholderTextColor={theme.colors.gray[0]}
        {...textInputProps}
      />
    </>
  );
};

export default TextInput;
