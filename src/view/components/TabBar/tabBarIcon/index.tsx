import {
  NavigationState,
  ParamListBase,
  PartialState,
  Route,
} from '@react-navigation/native';
import React from 'react';
import {Pressable} from 'react-native';
import {getResponsiveWidth} from '~/utils/responsive';
import {theme} from '~/view/styles/theme';
import SvgIcon from '../../SvgIcon';
import {BottomTabDescriptorMap} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import styles from '../styles';
import {tabIcons} from '../constants';

type NavigationRoute<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList,
> = Route<Extract<RouteName, string>, ParamList[RouteName]> & {
  state?: NavigationState | PartialState<NavigationState>;
};

type Props = {
  isActive: (index: number) => boolean;
  onPress: (
    route: NavigationRoute<ParamListBase, string>,
    index: number,
  ) => void;
  route: NavigationRoute<ParamListBase, string>;
  descriptors: BottomTabDescriptorMap;
  index: number;
};

const TabBarIcon: React.FC<Props> = ({
  route,
  descriptors,
  index,
  onPress,
  isActive,
}) => {
  return (
    <Pressable
      key={route.key}
      onPress={() => onPress(route, index)}
      accessibilityRole="button"
      accessibilityLabel={
        descriptors[route.key].options.tabBarAccessibilityLabel
      }
      accessibilityState={isActive(index) ? {selected: true} : {}}
      style={[
        styles.tab,
        route.name === 'MyPosts' && {maxWidth: getResponsiveWidth(85)},
        route.name === 'Profile' && {maxWidth: getResponsiveWidth(65)},
      ]}
      hitSlop={10}>
      <SvgIcon
        name={tabIcons[route.name]}
        size={32}
        fill={theme.colors.orange}
      />
    </Pressable>
  );
};

export default TabBarIcon;
