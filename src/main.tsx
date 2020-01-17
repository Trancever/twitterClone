import React from 'react';
import {
  Provider as PaperProvider,
  DefaultTheme,
  DarkTheme,
} from 'react-native-paper';
import { I18nManager } from 'react-native';
import { Updates } from 'expo';
import { NavigationNativeContainer } from '@react-navigation/native';
import { useColorScheme } from 'react-native-appearance';

import { RootNavigator } from './rootNavigator';
import { PreferencesContext } from './context/preferencesContext';
import { TabBarContext, TabBarSetContext, Tab } from './context/tabBarContext';

export const Main = () => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = React.useState<'light' | 'dark'>(
    colorScheme === 'dark' ? 'dark' : 'light'
  );
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
  );
};
