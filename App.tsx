import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppearanceProvider } from 'react-native-appearance';

import { Main } from './src/main';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppearanceProvider>
        <Main />
      </AppearanceProvider>
    </SafeAreaProvider>
  );
}
