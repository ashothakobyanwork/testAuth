import {StyleSheet} from 'react-native';
import {getResponsiveHeight} from '~/utils/responsive';
import {theme} from '~/view/styles/theme';

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    marginTop: getResponsiveHeight(37),
  },
  form: {
    marginTop: getResponsiveHeight(44),
    marginBottom: getResponsiveHeight(89),
    alignItems: 'center',
  },
  loginText: {
    marginBottom: getResponsiveHeight(20),
  },
  button: {
    marginTop: getResponsiveHeight(10),
    marginBottom: getResponsiveHeight(16),
  },
  bottomContainer: {
    gap: getResponsiveHeight(10),
    marginBottom: getResponsiveHeight(37),
  },
  vkButton: {
    backgroundColor: theme.colors.blue,
  },
  yandexButton: {
    backgroundColor: theme.colors.orange,
  },
  signUpText: {alignSelf: 'center'},
});

export default styles;
