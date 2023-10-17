import {FontFamily, theme} from '~/view/styles/theme';
import {getResponsiveHeight, getResponsiveWidth} from '~/utils/responsive';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    height: getResponsiveHeight(44),
    minHeight: 44,
    fontFamily: FontFamily.Text,
    fontSize: getResponsiveWidth(17),
    lineHeight: getResponsiveHeight(19),
    borderRadius: 8,
    color: theme.colors.black,
  },
  container: {
    flex: 1,
  },
  focusedTextInput: {},
});

export default styles;
