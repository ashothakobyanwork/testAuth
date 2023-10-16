import {StyleSheet} from 'react-native';
import {getResponsiveWidth} from '~/utils/responsive';

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flex: 1,
  },
  container: {
    paddingHorizontal: getResponsiveWidth(16),
  },
  icon: {
    alignSelf: 'center',
  },
});

export default styles;
