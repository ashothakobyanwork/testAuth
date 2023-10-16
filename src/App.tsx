import React from 'react';

import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {AppNavigator} from '~/view/navigation';

export const RootApp: React.FC = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppNavigator />
    </SafeAreaProvider>
  );
};
