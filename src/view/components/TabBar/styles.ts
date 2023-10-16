import {StyleSheet} from 'react-native';
import {getResponsiveHeight, getResponsiveWidth} from '~/utils/responsive';
import {theme} from '~/view/styles/theme';

const styles = StyleSheet.create({
  container: {
    height: getResponsiveHeight(95),
    left: 0,
    bottom: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: theme.colors.white,
    paddingTop: getResponsiveHeight(15),
    overflow: 'visible',
    borderTopWidth: 0.5,
    borderTopColor: theme.colors.gray[2],
  },
  tab: {
    alignItems: 'center',
    maxWidth: getResponsiveWidth(70),
    overflow: 'visible',
    flex: 1,
  },
  homeTab: {
    backgroundColor: '#fff',
    width: 90,
    height: 93,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    marginTop: -35,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  text: {
    marginTop: 6,
  },
});
export default styles;
