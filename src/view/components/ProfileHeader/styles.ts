import {StyleSheet} from 'react-native';
import {getResponsiveHeight, getResponsiveWidth} from '~/utils/responsive';
import {theme} from '~/view/styles/theme';

const styles = StyleSheet.create({
  container: {
    height: getResponsiveHeight(46),
    justifyContent: 'center',
    backgroundColor: theme.colors.gray[3],
    paddingHorizontal: getResponsiveWidth(15),
  },
});

export default styles;
