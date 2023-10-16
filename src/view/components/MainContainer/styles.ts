import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getResponsiveHeight} from '~/utils/responsive';
import {makeStyles} from '~/view/styles/types';
import {MainContainerProps} from './types';

const useStyles = makeStyles(
  ({withBottomInset}: Pick<MainContainerProps, 'withBottomInset'>) => {
    const {top, bottom} = useSafeAreaInsets();

    return {
      main: {
        flex: 1,
        paddingTop: getResponsiveHeight(top),
        paddingBottom: getResponsiveHeight(withBottomInset ? bottom : 0),
      },
    };
  },
);
export default useStyles;
