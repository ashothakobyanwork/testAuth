import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Counter from '../counter';
import {SvgIcon} from '~/view/components';
import useCountdown from '~/view/hooks/useCountDown';

const Timer = () => {
  const {minutes, seconds} = useCountdown(1, 10);

  return (
    <View style={styles.container}>
      <Counter count={Number(minutes[0])} type="white" />
      <Counter count={Number(minutes[1])} type="white" />
      <SvgIcon name="doubleDot" size={25} />
      <Counter count={Number(seconds[0])} type="pink" />
      <Counter count={Number(seconds[1])} type="pink" />
    </View>
  );
};

export default Timer;
