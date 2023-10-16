import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Favorite, Home, Profile, Gift} from '~/view/screens';
import {TabBar} from '~/view/components';
import {TabsStackParamList, TabsStackRouts} from './types';

const screenOptions = {
  gestureEnabled: false,
  headerShown: false,
};

const Tab = createBottomTabNavigator<TabsStackParamList>();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        ...screenOptions,
      }}
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={props => <TabBar {...props} />}
      initialRouteName={TabsStackRouts.Home}>
      <Tab.Screen name={TabsStackRouts.Home} component={Home} />
      <Tab.Screen name={TabsStackRouts.Gift} component={Gift} />
      <Tab.Screen name={TabsStackRouts.Favorite} component={Favorite} />
      <Tab.Screen name={TabsStackRouts.Profile} component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
