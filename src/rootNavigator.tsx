import React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';

import { BottomTabs } from './bottomTabs';
import { DrawerContent } from './drawerContent';

const Drawer = createDrawerNavigator();

export const RootNavigator = () => {
  const theme = useTheme();
  const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;

  return (
    <NavigationNativeContainer theme={navigationTheme}>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={BottomTabs} />
      </Drawer.Navigator>
    </NavigationNativeContainer>
  );
};
