import {FontFamily, theme} from '~/view/styles/theme';
import {getResponsiveHeight, getResponsiveValue} from '~/utils/responsive';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: getResponsiveHeight(22),
    fontFamily: FontFamily.Text,
    fontSize: getResponsiveValue(17),
    lineHeight: getResponsiveValue(19),
  },
  focusedTextInput: {},
});

export default styles;
