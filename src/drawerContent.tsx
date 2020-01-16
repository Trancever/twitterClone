import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import {
  withTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';

import { PreferencesContext } from './context/preferencesContext';

export const DrawerContent = withTheme(props => {
  const { rtl, theme, toggleRTL, toggleTheme } = React.useContext(
    PreferencesContext
  );

  return (
    <View
      style={[
        styles.drawerContent,
        { backgroundColor: props.theme.colors.surface },
      ]}
    >
      <View style={styles.userInfoSection}>
        <Avatar.Image
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
          }}
          size={50}
        />
        <Title style={styles.title}>Dawid Urbaniak</Title>
        <Caption style={styles.caption}>@trensik</Caption>
        <View style={styles.row}>
          <View style={styles.section}>
            <Paragraph style={[styles.paragraph, styles.caption]}>
              202
            </Paragraph>
            <Caption style={styles.caption}>Obserwuje</Caption>
          </View>
          <View style={styles.section}>
            <Paragraph style={[styles.paragraph, styles.caption]}>
              159
            </Paragraph>
            <Caption style={styles.caption}>Obserwujący</Caption>
          </View>
        </View>
      </View>
      <Drawer.Section style={styles.drawerSection}>
        <Drawer.Item
          icon="account-outline"
          label="Profile"
          onPress={() => {}}
        />
        <Drawer.Item icon="tune" label="Preferences" onPress={() => {}} />
        <Drawer.Item
          icon="bookmark-outline"
          label="Bookmarks"
          onPress={() => {}}
        />
      </Drawer.Section>
      <Drawer.Section title="Preferences">
        <TouchableRipple onPress={toggleTheme}>
          <View style={styles.preference}>
            <Text>Dark Theme</Text>
            <View pointerEvents="none">
              <Switch value={theme === 'dark'} />
            </View>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={toggleRTL}>
          <View style={styles.preference}>
            <Text>RTL</Text>
            <View pointerEvents="none">
              <Switch value={rtl === 'right'} />
            </View>
          </View>
        </TouchableRipple>
      </Drawer.Section>
    </View>
  );
});

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 50 : 47,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
