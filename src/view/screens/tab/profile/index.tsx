import React from 'react';
import {
  Button,
  MainContainer,
  ProfileContext,
  ProfileHeader,
} from '~/view/components';
import styles from './styles';
import {View} from 'react-native';
import {useAuth} from '~/view/hooks/useAuth';

const Profile = () => {
  const {me: profileData, onSignOut} = useAuth();

  return (
    <MainContainer>
      <View style={styles.container}>
        <ProfileHeader text="Персональная информация" />
        <ProfileContext
          label="Имя"
          text={profileData?.name ?? ''}
          withBottomBorder
        />
        <ProfileHeader text="Контакты" />
        <ProfileContext
          label="Телефон"
          text={profileData?.phone ? profileData?.phone : ''}
          withBottomBorder
        />
        <ProfileContext
          withBottomBorder
          label="E-mail"
          text={profileData?.email || ''}
        />
        <ProfileContext label="Город" text={profileData?.address?.city || ''} />

        <View style={styles.buttonWrapper}>
          <Button label="Выйти из профиля" onPress={onSignOut} />
        </View>
      </View>
    </MainContainer>
  );
};

export default Profile;
