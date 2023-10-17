import {getResponsiveHeight, getResponsiveWidth} from '~/utils/responsive';
import {theme} from '~/view/styles/theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainWrapper: {
    height: getResponsiveHeight(66),
    minHeight: 66,
    position: 'relative',
    width: '100%',
  },
  wrapper: {
    backgroundColor: theme.colors.gray[1],
    height: getResponsiveHeight(44),
    minHeight: 44,
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.gray[1],
  },
  children: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: getResponsiveWidth(16),
  },
  error: {
    backgroundColor: theme.colors.errorBackground,
  },
  errorText: {
    paddingLeft: getResponsiveWidth(16),
  },
});

export default styles;
