import React, {FC} from 'react';
import {StatusBar, View} from 'react-native';

import {getResponsiveWidth} from '~/utils/responsive';
import {theme} from '~/view/styles/theme';
import {MainContainerProps} from './types';
import useStyles from './styles';

const MainContainer: FC<MainContainerProps> = ({
  backgroundColor = 'white',
  withPadding,
  withBottomInset = true,
  children,
  statusBarColor = theme.colors.white,
}) => {
  const styles = useStyles({withBottomInset});

  return (
    <View
      style={[
        styles.main,
        {backgroundColor},
        withPadding && {paddingHorizontal: getResponsiveWidth(16)},
      ]}>
      <StatusBar
        animated
        barStyle="dark-content"
        backgroundColor={statusBarColor}
      />
      <View
        style={{
          flex: 1,
        }}>
        {children}
      </View>
    </View>
  );
};

export default MainContainer;
