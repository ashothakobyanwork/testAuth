import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, View} from 'react-native';

import {theme} from '~/view/styles/theme';

import {AppText, SvgIcon} from '~/view/components';
import useStyles from './styles';
import {Props} from './types';

const StackHeader: React.FC<Props> = ({
  text,
  textStyle,
  style,
  leftContainerStyle,
  iconSize: iconSizes = 22,
  hideLeftIcon = false,
  leftIconName = 'leftArrow',
  disabled,
  leftIconPress,
}) => {
  const styles = useStyles();
  const navigation = useNavigation();

  const handleBack = (): void => {
    if (leftIconPress) {
      leftIconPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={[styles.container, style]}>
      <View style={[styles.leftContainer, leftContainerStyle]}>
        {!hideLeftIcon && (
          <Pressable disabled={disabled} onPress={handleBack} hitSlop={15}>
            <SvgIcon name={leftIconName} size={iconSizes} />
          </Pressable>
        )}
      </View>
      {text && (
        <AppText variant="h1" style={[{color: theme.colors.black}, textStyle]}>
          {text}
        </AppText>
      )}
    </View>
  );
};

export default StackHeader;
