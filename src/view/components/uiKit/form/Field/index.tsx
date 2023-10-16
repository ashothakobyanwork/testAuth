import React, {cloneElement, ReactElement, ReactNode} from 'react';
import {FieldError} from 'react-hook-form';
import {StyleProp, View, ViewStyle} from 'react-native';

import styles from './styles';
import AppText from '../../AppText';
import {theme} from '~/view/styles/theme';

export interface FieldProps {
  error?: FieldError;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  rightItemElement?: ReactElement;
}
const Field: React.FC<FieldProps> = ({
  error,
  style,
  children,
  rightItemElement,
}) => {
  return (
    <View style={[styles.mainWrapper, style]}>
      <View style={[styles.wrapper, error && styles.error]}>
        <View style={[styles.children, error && styles.error]}>
          {children}
          {!!rightItemElement &&
            cloneElement(rightItemElement, {
              zIndex: 1,
            })}
        </View>
      </View>
      {error && (
        <AppText
          style={styles.errorText}
          color={theme.colors.common.error}
          fontWeight="medium"
          variant="p2">
          {error.message}
        </AppText>
      )}
    </View>
  );
};

export default Field;
