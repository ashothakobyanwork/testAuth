import {theme} from '~/view/styles/theme';
import {getResponsiveHeight} from '~/utils/responsive';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  icon: {
    marginRight: getResponsiveHeight(10),
  },
  button: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: getResponsiveHeight(48),
    width: '100%',
    backgroundColor: theme.colors.primary,
  },
  buttonTextWrapper: {flexDirection: 'column', alignItems: 'center'},
  buttonDisabled: {
    backgroundColor: theme.colors.gray[0],
    borderWidth: 0,
  },
  buttonText: {
    color: theme.colors.white,
  },

  buttonTextDisabled: {
    color: theme.colors.gray['1'],
  },
  buttonTextLoading: {
    opacity: 0,
  },
  loader: {
    position: 'absolute',
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {width: 2, height: 3},
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 2,
  },
});

export default styles;
