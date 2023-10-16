import React from 'react';
import {Image, View} from 'react-native';
import {MainContainer, StackHeader, SvgIcon} from '~/view/components';
import homeBackground from '~/view/assets/images/homeBackground.png';
import styles from './styles';
import {theme} from '~/view/styles/theme';
import {getResponsiveHeight, getResponsiveWidth} from '~/utils/responsive';
import {Raffle} from './components/raffle';

const Home = () => {
  return (
    <MainContainer backgroundColor="#393E5D">
      <Image source={homeBackground} style={styles.backgroundImage} />
      <View style={styles.container}>
        <StackHeader
          leftIconName="leftArrowLong"
          text="Розыгрыш"
          textStyle={{color: theme.colors.white}}
          disabled
        />
        <SvgIcon
          name="allPromotionsWith"
          width={getResponsiveWidth(168.38)}
          height={getResponsiveHeight(129.146)}
          style={styles.icon}
        />
        <Raffle />
      </View>
    </MainContainer>
  );
};

export default Home;
