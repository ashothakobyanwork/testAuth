import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SignIn} from '~/view/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, RootStackRouts} from './types';
import TabNavigator from '../tabBar/TabBar';
import {useAuth} from '~/view/hooks/useAuth';

export const AppStack = createNativeStackNavigator<RootStackParamList>();

const screenOptions = {
  headerShown: false,
};

const AppNavigator = () => {
  const {isAuthenticated} = useAuth();
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={screenOptions}
        initialRouteName={RootStackRouts.SignIn}>
        {isAuthenticated ? (
          <AppStack.Screen
            name={RootStackRouts.Tabs}
            component={TabNavigator}
            options={{gestureEnabled: false}}
          />
        ) : (
          <AppStack.Screen name={RootStackRouts.SignIn} component={SignIn} />
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
