import React from 'react';
import { View, Text } from 'react-native';
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';

import { TabBarSetContext } from './context/tabBarContext';

type Props = {
  navigation: MaterialBottomTabNavigationProp<{}>;
};

export const Notifications = (props: Props) => {
  const setTab = React.useContext(TabBarSetContext);

  //TODO: this runs too often. Check how to fix it
  React.useEffect(() => {
    const onTabPress = () => setTab('Notifications');
    props.navigation.addListener('tabPress', onTabPress);
    return () => props.navigation.removeListener('tabPress', onTabPress);
  }, [props.navigation, setTab]);

  return (
    <View style={{ flex: 1 }}>
      <Text>Notifications</Text>
    </View>
  );
};
