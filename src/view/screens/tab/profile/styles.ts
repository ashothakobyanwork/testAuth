import {StyleSheet} from 'react-native';
import {getResponsiveHeight, getResponsiveWidth} from '~/utils/responsive';
import {theme} from '~/view/styles/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray[3],
    flex: 1,
  },
  header: {
    height: getResponsiveHeight(46),
    paddingLeft: getResponsiveWidth(15),
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
  },
  buttonWrapper: {
    marginTop: getResponsiveHeight(20),
    paddingHorizontal: getResponsiveWidth(15),
    gap: 5,
  },
  activityIndicator: {
    position: 'absolute',
    alignSelf: 'center',
    top: 0,
    bottom: 0,
  },
});
export default styles;
