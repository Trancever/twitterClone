import React from 'react';
import color from 'color';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTheme } from 'react-native-paper';

import overlay from './overlay';
import { FeedStack } from './feedStack';
import { Message } from './message';
import { Notifications } from './notifications';

const Tab = createMaterialBottomTabNavigator();

export const BottomTabs = () => {
  const theme = useTheme();

  const tabBarColor = theme.dark
    ? (overlay(6, theme.colors.surface) as string)
    : theme.colors.surface;

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      backBehavior="initialRoute"
      shifting={true}
      activeColor={theme.colors.primary}
      inactiveColor={color(theme.colors.text)
        .alpha(0.6)
        .rgb()
        .string()}
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
        name="Message"
        component={Message}
        options={{
          tabBarIcon: 'message-text-outline',
          tabBarColor,
        }}
      />
    </Tab.Navigator>
  );
};
