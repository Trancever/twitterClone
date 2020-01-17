import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'react-native-paper';

export const AllNotifications = () => {
  const theme = useTheme();

  return <View style={{ flex: 1, backgroundColor: theme.colors.background }} />;
};
