import {Dispatch, SetStateAction} from 'react';
import {TextStyle, ViewStyle} from 'react-native';
import {IconName} from '../SvgIcon';

export interface LocalProps {
  setShowCustomer: Dispatch<SetStateAction<boolean>>;
}

export type Props = {
  text?: string;
  style?: ViewStyle;
  leftIconName?: IconName;
  textStyle?: TextStyle;
  leftContainerStyle?: ViewStyle;
  iconSize?: number;
  hideLeftIcon?: boolean;
  disabled?: boolean;
  leftIconPress?: () => void;
};
