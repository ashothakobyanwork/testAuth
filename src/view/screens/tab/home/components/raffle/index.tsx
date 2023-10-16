import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {AppText, Button, SvgIcon} from '~/view/components';
import {theme} from '~/view/styles/theme';
import Timer from '../timer';
import {raffleItems} from './mock';
import RaffleItem from '../raffleItem';

export const Raffle = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppText variant="p4" color={theme.colors.white}>
          До начала розыгрыша
        </AppText>
        <SvgIcon name="question" size={24} style={styles.questionIcon} />
      </View>
      <Timer />
      <View style={styles.header}>
        <AppText variant="p4" color={theme.colors.white}>
          Разыгрываем сегодняа
        </AppText>
        <SvgIcon name="question" size={24} style={styles.questionIcon} />
      </View>
      <View style={styles.raffleWrapper}>
        {raffleItems.map((raffle, index) => (
          <RaffleItem key={index} {...raffle} />
        ))}
      </View>
      <Button containerStyle={styles.button} label="Участвовать" />
    </View>
  );
};
