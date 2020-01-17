import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';
import { Appbar, Avatar, useTheme } from 'react-native-paper';

import { Message } from './message';
import { TabBarSetContext } from './context/tabBarContext';

const Stack = createStackNavigator();

type Props = {
  navigation: MaterialBottomTabNavigationProp<{}>;
};

export const MessageStack = (props: Props) => {
  const theme = useTheme();
  const setTab = React.useContext(TabBarSetContext);

  //TODO: this runs too often. Check how to fix it
  React.useEffect(() => {
    const onTabPress = () => setTab('Message');
    props.navigation.addListener('tabPress', onTabPress);
    return () => props.navigation.removeListener('tabPress', onTabPress);
  }, [props.navigation, setTab]);

  return (
    <Stack.Navigator
      initialRouteName="Messages"
      headerMode="screen"
      screenOptions={{
        header: props => {
          return (
            <Appbar.Header
              theme={{ colors: { primary: theme.colors.surface } }}
            >
              <TouchableOpacity
                style={{ marginLeft: 10 }}
                onPress={() => {
                  ((props.navigation as any) as DrawerNavigationProp<{}>).openDrawer();
                }}
              >
                <Avatar.Image
                  size={40}
                  source={{
                    uri:
                      'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
                  }}
                />
              </TouchableOpacity>
              <Appbar.Content title="Messages" color={theme.colors.primary} />
            </Appbar.Header>
          );
        },
      }}
    >
      <Stack.Screen name="Messages" component={Message} />
    </Stack.Navigator>
  );
};
