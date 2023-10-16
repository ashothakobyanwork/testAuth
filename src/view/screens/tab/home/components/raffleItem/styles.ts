import {StyleSheet} from 'react-native';
import {getResponsiveWidth} from '~/utils/responsive';
import {theme} from '~/view/styles/theme';

const styles = StyleSheet.create({
  container: {alignItems: 'center', gap: 3},
  nestedContainer: {
    width: getResponsiveWidth(96),
    height: getResponsiveWidth(96),
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: getResponsiveWidth(75),
    height: getResponsiveWidth(75),
  },
  count: {
    position: 'absolute',
    width: getResponsiveWidth(24),
    height: getResponsiveWidth(24),
    borderRadius: 24,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    right: getResponsiveWidth(-12),
    top: getResponsiveWidth(-12),
  },
});

export default styles;
