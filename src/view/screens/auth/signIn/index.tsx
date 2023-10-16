import React, {useState} from 'react';
import {getResponsiveHeight, getResponsiveWidth} from '~/utils/responsive';
import {
  AppText,
  Button,
  MainContainer,
  StackHeader,
  SvgIcon,
  TextField,
} from '~/view/components';
import styles from './styles';
import {Pressable, View} from 'react-native';
import {useSignInForm} from './hooks';
import {theme} from '~/view/styles/theme';

const SignIn = () => {
  const {form, isLoading, handleSubmit} = useSignInForm();
  const [isPasswordViewed, setIsPasswordViewed] = useState<boolean>(false);
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
        <AppText style={styles.loginText}>Войти</AppText>
        <TextField
          control={form.control}
          name="login"
          placeholder="Логин или телефон"
        />
        <TextField
          control={form.control}
          name="password"
          placeholder="Пароль"
          secureTextEntry={!isPasswordViewed}
          autoComplete="password"
          autoCapitalize="none"
          rightItemElement={
            <Pressable
              hitSlop={10}
              onPress={() => setIsPasswordViewed(prevValue => !prevValue)}>
              <SvgIcon
                name={isPasswordViewed ? 'viewOn' : 'viewOff'}
                width={getResponsiveWidth(20)}
                height={
                  isPasswordViewed
                    ? getResponsiveHeight(14)
                    : getResponsiveHeight(8)
                }
              />
            </Pressable>
          }
        />
        <Button
          isLoading={isLoading}
          containerStyle={styles.button}
          label="Войти"
          onPress={handleSubmit}
        />
        <AppText color={theme.colors.gray[2]} variant="p2">
          Не помню пароль
        </AppText>
      </View>
      <View style={styles.bottomContainer}>
        <Button
          icon="VK"
          containerStyle={styles.vkButton}
          label="Войти через Вконтакте"
          withShadow
        />
        <Button
          icon="yandex"
          containerStyle={styles.yandexButton}
          label="Войти через Яндекс"
          withShadow
        />
      </View>
      <AppText style={styles.signUpText}>Регистрация</AppText>
    </MainContainer>
  );
};

export default SignIn;
