import React from 'react';
import color from 'color';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTheme, Portal, FAB } from 'react-native-paper';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useSafeArea } from 'react-native-safe-area-context';

import overlay from './overlay';
import { FeedStack } from './feedStack';
import { MessageStack } from './messageStack';
import { Notifications } from './notifications';
import { TabBarContext } from './context/tabBarContext';

const Tab = createMaterialBottomTabNavigator();

export const BottomTabs = () => {
  const theme = useTheme();
  const tab = React.useContext(TabBarContext);
  const safeArea = useSafeArea();

  const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;

  let icon = 'feather';

  switch (tab) {
    case 'Message':
      icon = 'email-plus-outline';
      break;
    default:
      icon = 'feather';
      break;
  }

  const tabBarColor = theme.dark
    ? (overlay(6, theme.colors.surface) as string)
    : theme.colors.surface;

  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="Feed"
        backBehavior="initialRoute"
        shifting={true}
        activeColor={theme.colors.primary}
        inactiveColor={color(theme.colors.text)
          .alpha(0.6)
          .rgb()
          .string()}
        theme={navigationTheme}
      >
        <Tab.Screen
          name="Feed"
          component={FeedStack}
          options={{
            tabBarIcon: 'home-account',
            tabBarColor,
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarIcon: 'bell-outline',
            tabBarColor,
          }}
        />
        <Tab.Screen
          name="Messages"
          component={MessageStack}
          options={{
            tabBarIcon: 'message-text-outline',
            tabBarColor,
          }}
        />
      </Tab.Navigator>
      <Portal>
        <FAB
          icon={icon}
          style={{
            position: 'absolute',
            bottom: safeArea.bottom + 65,
            right: 16,
          }}
          color="white"
          theme={{
            colors: {
              accent: theme.colors.primary,
            },
          }}
          onPress={() => {}}
        />
      </Portal>
    </React.Fragment>
  );
};
