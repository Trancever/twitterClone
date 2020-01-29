import React from 'react';
import color from 'color';
import { Dimensions } from 'react-native';
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';
import { useTheme } from 'react-native-paper';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import overlay from './overlay';
import { TabBarSetContext } from './context/tabBarContext';
import { Feed } from './feed';
import { AllNotifications } from './all';

type Props = {
  navigation: MaterialBottomTabNavigationProp<{}>;
};

const initialLayout = { width: Dimensions.get('window').width };

const All = () => <AllNotifications />;

const Mentions = () => <Feed />;

export const Notifications = (props: Props) => {
  const setTab = React.useContext(TabBarSetContext);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'all', title: 'All' },
    { key: 'mentions', title: 'Mentions' },
  ]);

  const theme = useTheme();

  //TODO: this runs too often. Check how to fix it
  React.useEffect(() => {
    const onTabPress = () => setTab('Notifications');
    props.navigation.addListener('tabPress', onTabPress);
    return () => props.navigation.removeListener('tabPress', onTabPress);
  }, [props.navigation, setTab]);

  const renderScene = SceneMap({
    all: All,
    mentions: Mentions,
  });

  const tabBarColor = theme.dark
    ? (overlay(4, theme.colors.surface) as string)
    : theme.colors.surface;

  const rippleColor = theme.dark
    ? color(tabBarColor).lighten(0.5)
    : color(tabBarColor).darken(0.2);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: theme.colors.primary }}
      style={{ backgroundColor: tabBarColor, shadowColor: theme.colors.text }}
      labelStyle={{ color: theme.colors.primary }}
      pressColor={rippleColor}
    />
  );

  return (
    <React.Fragment>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
    </React.Fragment>
  );
};
