import React, {FC, memo} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {AppText} from '~/view/components';
import {theme} from '~/view/styles/theme';

type TProps = {
  type: 'white' | 'pink';
  count: number;
};

const Counter: FC<TProps> = ({type, count}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            type === 'pink' ? theme.colors.primary : theme.colors.white,
        },
      ]}>
      <AppText variant="h2">{String(count)}</AppText>
    </View>
  );
};

export default memo(Counter);
