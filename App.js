import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigator from './navigation/StackNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
          <MainNavigator />
    </SafeAreaProvider>
  );
}
