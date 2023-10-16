import {getResponsiveValue} from '~/utils/responsive';
import {Theme} from './types';

const colors: Theme['colors'] = {
  common: {
    error: '#EB484E',
    success: '#00C667',
  },
  white: '#FFFFFF',
  black: '#000000',
  blue: '#0077FF',
  primary: '#FF00B8',
  gray: {1: 'rgba(60, 60, 67, 0.3)', 0: 'rgba(242, 242, 247, 1)'},
  orange: '#FB3F1C',
};

export enum FontFamily {
  REGULAR = 'SF-Pro-Display-Regular',
  MEDIUM = 'SF-Pro-Display-Medium',
  SEMI_BOLD = 'SF-Pro-Display-Semibold',
  BOLD = 'SF-Pro-Display-Bold',
  Text = 'SF-Pro-Text-Regular',
}

export const theme: Theme = {
  colors,
  fontFamily: {
    regular: 'SF-Pro-Display-Regular',
    medium: 'SF-Pro-Display-Medium',
    semiBold: 'SF-Pro-Display-Semibold',
    bold: 'SF-Pro-Display-Bold',
    text: 'SF-Pro-Text-Regular',
  },
  text: {
    h1: {
      fontFamily: FontFamily.REGULAR,
      fontSize: getResponsiveValue(20),
      lineHeight: getResponsiveValue(24),
    },
  },
};
