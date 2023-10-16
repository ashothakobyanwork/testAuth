import React from 'react';

import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {AppNavigator} from '~/view/navigation';
import {ApolloProvider} from '@apollo/client';
import client from './apollo/client';

export const RootApp: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppNavigator />
      </SafeAreaProvider>
    </ApolloProvider>
  );
};
