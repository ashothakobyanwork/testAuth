import {NavigatorScreenParams} from '@react-navigation/native';
import {TabsStackParamList} from '~/view/navigation/tabBar/types';

export type RootStackParamList = {
  [RootStackRouts.SignIn]: undefined;
  [RootStackRouts.Tabs]: NavigatorScreenParams<TabsStackParamList>;
};

export enum RootStackRouts {
  SignIn = 'SignIn',
  Tabs = 'Tabs',
}
