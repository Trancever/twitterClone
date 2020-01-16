import React from 'react';
import { I18nManager } from 'react-native';
import { Updates } from 'expo';
import {
  Provider as PaperProvider,
  DefaultTheme,
  DarkTheme,
} from 'react-native-paper';
import { NavigationNativeContainer } from '@react-navigation/native';

import { RootNavigator } from './src/rootNavigator';
import { PreferencesContext } from './src/context/preferencesContext';

export default function App() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
  const [rtl] = React.useState<boolean>(I18nManager.isRTL);

  function toggleTheme() {
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
  }

  function toggleRTL() {
    I18nManager.forceRTL(!rtl);
    Updates.reloadFromCache();
  }

  return (
    <PreferencesContext.Provider
      value={{ toggleTheme, toggleRTL, theme, rtl: rtl ? 'right' : 'left' }}
    >
      <PaperProvider
        theme={
          theme === 'light'
            ? {
                ...DefaultTheme,
                colors: { ...DefaultTheme.colors, primary: '#1ba1f2' },
              }
            : {
                ...DarkTheme,
                colors: { ...DarkTheme.colors, primary: '#1ba1f2' },
              }
        }
      >
        <NavigationNativeContainer>
          <RootNavigator />
        </NavigationNativeContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}
