import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { BottomTabs } from './bottomTabs';
import { DrawerContent } from './drawerContent';

const Drawer = createDrawerNavigator();

export const RootNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="Home" component={BottomTabs} />
    </Drawer.Navigator>
  );
};
