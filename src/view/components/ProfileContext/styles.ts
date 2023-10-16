import {StyleSheet} from 'react-native';
import {getResponsiveHeight, getResponsiveWidth} from '~/utils/responsive';
import {theme} from '~/view/styles/theme';

const styles = StyleSheet.create({
  container: {
    height: getResponsiveHeight(46),
    paddingHorizontal: getResponsiveWidth(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  },
  rightWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomBorder: {
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.gray[2],
  },
});

export default styles;
