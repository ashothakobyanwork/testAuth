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
  gray: {1: '#F2F2F7', 0: '#BBBBC1'},
  orange: '#FB3F1C',
  errorBackground: '#FDF5F5',
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
    p1: {
      fontFamily: FontFamily.REGULAR,
      fontSize: getResponsiveValue(16),
      lineHeight: getResponsiveValue(24),
    },
    p2: {
      fontFamily: FontFamily.REGULAR,
      fontSize: getResponsiveValue(14),
      lineHeight: getResponsiveValue(24),
    },
  },
};
