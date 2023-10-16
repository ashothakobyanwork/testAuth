import {
  NavigationState,
  ParamListBase,
  PartialState,
  Route,
} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';

import styles from './styles';
import TabBarIcon from './tabBarIcon';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

type NavigationRoute<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList,
> = Route<Extract<RouteName, string>, ParamList[RouteName]> & {
  state?: NavigationState | PartialState<NavigationState>;
};
const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const isActive = React.useCallback(
    (index: number) => state.index === index,
    [state.index],
  );

  const onPress = React.useCallback(
    (route: NavigationRoute<ParamListBase, string>, index: number) => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });
      if (!isActive(index) && !event.defaultPrevented) {
        navigation.navigate(route.name);
      }
    },
    [isActive, navigation],
  );

  return (
    <View style={styles.container}>
      <TabBarIcon
        route={state.routes[0]}
        index={0}
        onPress={onPress}
        isActive={isActive}
        descriptors={descriptors}
      />
      <TabBarIcon
        route={state.routes[1]}
        index={1}
        onPress={onPress}
        isActive={isActive}
        descriptors={descriptors}
      />
      <TabBarIcon
        route={state.routes[2]}
        index={2}
        onPress={onPress}
        isActive={isActive}
        descriptors={descriptors}
      />
      <TabBarIcon
        route={state.routes[3]}
        index={3}
        onPress={onPress}
        isActive={isActive}
        descriptors={descriptors}
      />
    </View>
  );
};
export default TabBar;
