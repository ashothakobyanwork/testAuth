import {StyleSheet} from 'react-native';
import {getResponsiveHeight, getResponsiveWidth} from '~/utils/responsive';

const styles = StyleSheet.create({
  container: {
    width: getResponsiveWidth(70),
    height: getResponsiveHeight(100),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 33,
  },
});

export default styles;
