import {StyleSheet} from 'react-native';
import {getResponsiveHeight} from '~/utils/responsive';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    marginTop: getResponsiveHeight(24),
    alignItems: 'center',
  },
});

export default styles;
