import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SignIn} from '~/view/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, RootStackRouts} from './types';

export const AppStack = createNativeStackNavigator<RootStackParamList>();

const screenOptions = {
  headerShown: false,
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={screenOptions}
        initialRouteName={RootStackRouts.SignIn}>
        <AppStack.Screen name={RootStackRouts.SignIn} component={SignIn} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
