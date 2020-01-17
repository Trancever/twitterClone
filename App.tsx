import React from 'react';
import { I18nManager } from 'react-native';
import { Updates } from 'expo';
import {
  Provider as PaperProvider,
  DefaultTheme,
  DarkTheme,
} from 'react-native-paper';
import { NavigationNativeContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootNavigator } from './src/rootNavigator';
import { PreferencesContext } from './src/context/preferencesContext';
import {
  TabBarContext,
  TabBarSetContext,
  Tab,
} from './src/context/tabBarContext';

export default function App() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
  const [rtl] = React.useState<boolean>(I18nManager.isRTL);
  const [tab, setTab] = React.useState<Tab>('Feed');

  function toggleTheme() {
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
  }

  const toggleRTL = React.useCallback(() => {
    I18nManager.forceRTL(!rtl);
    Updates.reloadFromCache();
  }, [rtl]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      toggleRTL,
      theme,
      rtl: (rtl ? 'right' : 'left') as 'right' | 'left',
    }),
    [rtl, theme, toggleRTL]
  );

  return (
    <SafeAreaProvider>
      <PreferencesContext.Provider value={preferences}>
        <TabBarContext.Provider value={tab}>
          <TabBarSetContext.Provider value={setTab}>
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
          </TabBarSetContext.Provider>
        </TabBarContext.Provider>
      </PreferencesContext.Provider>
    </SafeAreaProvider>
  );
}
