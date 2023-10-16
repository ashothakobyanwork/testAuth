import {getResponsiveHeight, getResponsiveWidth} from '~/utils/responsive';
import {makeStyles} from '~/view/styles/types';

const useStyles = makeStyles({
  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    height: getResponsiveHeight(45),
  },
  leftContainer: {
    marginLeft: getResponsiveWidth(0),
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: getResponsiveWidth(0),
  },
});

export default useStyles;
