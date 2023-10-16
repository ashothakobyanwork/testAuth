import {Dispatch, SetStateAction} from 'react';
import {ViewStyle} from 'react-native';
import {IconName} from '../SvgIcon';

export interface LocalProps {
  setShowCustomer: Dispatch<SetStateAction<boolean>>;
}

export type Props = {
  text?: string;
  style?: ViewStyle;
  leftIconName?: IconName;
  textStyle?: ViewStyle;
  leftContainerStyle?: ViewStyle;
  iconSize?: number;
  hideLeftIcon?: boolean;
  disabled?: boolean;
  leftIconPress?: () => void;
};
