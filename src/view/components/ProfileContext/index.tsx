import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {AppText} from '~/view/components';
import {theme} from '~/view/styles/theme';

type Props = {
  label: string;
  text: string;
  withBottomBorder?: boolean;
};

const ProfileContext: React.FC<Props> = ({
  text,
  label,
  withBottomBorder = false,
}) => {
  return (
    <View style={[styles.container, withBottomBorder && styles.bottomBorder]}>
      <AppText>{label}</AppText>
      <View style={styles.rightWrapper}>
        <AppText color={theme.colors.black} fontWeight={'medium'}>
          {text}
        </AppText>
      </View>
    </View>
  );
};

export default ProfileContext;
