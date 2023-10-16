import {TabsStackParamList} from '~/view/navigation/tabBar/types';
import {RootStackParamList} from '~/view/navigation/appNavigator/types';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
    interface TabsParamList extends TabsStackParamList {}
  }
}
