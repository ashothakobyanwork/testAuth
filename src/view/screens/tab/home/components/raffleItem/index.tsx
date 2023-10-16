import React from 'react';
import {Image, ImageSourcePropType, View} from 'react-native';
import styles from './styles';
import {AppText} from '~/view/components';
import {theme} from '~/view/styles/theme';

export type TRaffleItemProps = {
  count: number;
  name: string;
  src: ImageSourcePropType;
};

const RaffleItem: React.FC<TRaffleItemProps> = ({name, src, count}) => {
  return (
    <View style={styles.container}>
      <View style={styles.nestedContainer}>
        <Image source={src} style={styles.image} />
        <View style={styles.count}>
          <AppText color={theme.colors.white}>{count}</AppText>
        </View>
      </View>
      <AppText color={theme.colors.white}>{name}</AppText>
    </View>
  );
};

export default RaffleItem;
