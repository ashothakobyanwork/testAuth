import React from 'react';

import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {AppNavigator} from '~/view/navigation';
import {ApolloProvider} from '@apollo/client';
import client from './apollo/client';
import {AuthProvider} from './view/context';

export const RootApp: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <AuthProvider>
          <StatusBar translucent backgroundColor="transparent" />
          <AppNavigator />
        </AuthProvider>
      </SafeAreaProvider>
    </ApolloProvider>
  );
};
