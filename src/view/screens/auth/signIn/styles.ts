import {StyleSheet} from 'react-native';
import {getResponsiveHeight} from '~/utils/responsive';

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    marginTop: getResponsiveHeight(37),
  },
  form: {
    marginTop: getResponsiveHeight(47),
    marginBottom: getResponsiveHeight(99),
    alignItems: 'center',
  },
});

export default styles;
