import React from 'react';
import {getResponsiveHeight, getResponsiveWidth} from '~/utils/responsive';
import {
  AppText,
  MainContainer,
  StackHeader,
  SvgIcon,
  TextField,
} from '~/view/components';
import styles from './styles';
import {View} from 'react-native';
import {useSignInForm} from './hooks';

const SignIn = () => {
  const {form} = useSignInForm();
  return (
    <MainContainer withPadding>
      <StackHeader text="Авторизация" disabled />
      <SvgIcon
        name="allPromotions"
        width={getResponsiveWidth(114)}
        height={getResponsiveHeight(70)}
        style={styles.logo}
      />
      <View style={styles.form}>
        <AppText>Войти</AppText>
        <TextField
          control={form.control}
          name="phoneOrLogin"
          placeholder="Логин или телефон"
        />
        <TextField
          control={form.control}
          name="password"
          placeholder="Пароль"
          rightItemElement={
            <SvgIcon
              name="viewOff"
              width={getResponsiveWidth(20)}
              height={getResponsiveHeight(8)}
            />
          }
        />
      </View>
    </MainContainer>
  );
};

export default SignIn;
