import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

export type TextVariant = 'h1';

export interface TextThemeProps {
  fontFamily: string;
  fontSize: number;
  lineHeight?: number;
}

export type FontWeight = 'regular' | 'medium' | 'semiBold' | 'bold' | 'text';

export type FontFamily = Record<FontWeight, string>;

export interface Theme {
  colors: {
    primary: string;
    common: {
      error: string;
      success: string;
      [key: string]: string;
    };
    white: string;
    black: string;
    gray: Record<number, string>;
    blue: string;
    orange: string;
  };
  fontFamily: FontFamily;
  text: Record<TextVariant, TextThemeProps>;
}

export interface InputColors {
  background: string;
  text: string;
  placeholder: string;
  border: string;
  selectionColor?: string;
  icon: string;
}

export type NamedStyles<T> = {
  [key in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

export const makeStyles = <
  P extends Record<string, unknown> | void,
  S extends NamedStyles<S>,
>(
  styles: ((props: P) => S) | S,
): ((props: P) => S) => {
  return styles instanceof Function ? styles : () => styles;
};
