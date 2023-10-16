import * as React from 'react';
import {Pressable, View} from 'react-native';
import {Flow} from 'react-native-animated-spinkit';

import {SvgIcon} from '~/view/components';
import {theme} from '~/view/styles/theme';

import {AppText} from '~/view/components';
import useSwitchValue from '~/view/hooks/useSwitchValue';
import {Props} from './types';
import styles from './styles';

const Button: React.FC<Props> = ({
  containerStyle,
  label,
  disabled,
  isLoading,
  children,
  textStyle,
  icon,
  ...buttonProps
}) => {
  const {value, on, off} = useSwitchValue(false);

  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled || isLoading}
      onPressIn={on}
      onPressOut={off}
      style={[
        styles.button,
        containerStyle,
        value && {opacity: 0.8},
        disabled && styles.buttonDisabled,
      ]}
      {...buttonProps}>
      <>
        {icon && <SvgIcon name={icon} size={21} style={styles.icon} />}
        <View style={styles.buttonTextWrapper}>
          {label && (
            <AppText
              variant="p3"
              style={[
                styles.buttonText,
                textStyle,
                isLoading && styles.buttonTextLoading,
                disabled && styles.buttonTextDisabled,
              ]}>
              {label}
            </AppText>
          )}
        </View>
        {isLoading && (
          <Flow color={theme.colors.white} size={40} style={styles.loader} />
        )}
        {children}
      </>
    </Pressable>
  );
};

export default Button;
