import {StyleSheet} from 'react-native';
import {getResponsiveHeight, getResponsiveWidth} from '~/utils/responsive';

const styles = StyleSheet.create({
  container: {
    marginTop: getResponsiveHeight(20),
    alignItems: 'center',
  },
  header: {
    marginTop: getResponsiveHeight(20),
    flexDirection: 'row',
  },
  questionIcon: {position: 'absolute', right: getResponsiveWidth(-47)},
  raffleWrapper: {
    flexDirection: 'row',
    gap: 23,
    marginTop: getResponsiveHeight(24),
    marginBottom: getResponsiveHeight(90),
  },
  button: {
    height: getResponsiveHeight(44),
  },
});

export default styles;
