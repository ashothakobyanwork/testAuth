import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {AppText} from '~/view/components';
import {theme} from '~/view/styles/theme';

type Props = {
  text: string;
};

const ProfileHeader: React.FC<Props> = ({text}) => {
  return (
    <View style={styles.container}>
      <AppText variant="h1" color={theme.colors.black} fontWeight={'medium'}>
        {text}
      </AppText>
    </View>
  );
};

export default ProfileHeader;
