import {PressableProps, StyleProp, TextStyle, ViewStyle} from 'react-native';
import {IconName} from '../../SvgIcon';

export type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  label?: string;
  isLoading?: boolean;
  fullWidth?: boolean;
  icon?: IconName;
} & Omit<PressableProps, 'title' | 'style'>;
