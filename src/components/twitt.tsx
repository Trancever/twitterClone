import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import {
  Surface,
  Title,
  Caption,
  Text,
  Avatar,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import color from 'color';

type Props = {
  id: number;
  name: string;
  handle: string;
  date: string;
  content: string;
  image: string;
  avatar: string;
  comments: number;
  retweets: number;
  hearts: number;
  onPress: (id: number) => void;
};

export const Twitt = (props: Props) => {
  const theme = useTheme();

  const iconColor = color(theme.colors.text)
    .alpha(0.54)
    .rgb()
    .string();

  const contentColor = color(theme.colors.text)
    .alpha(0.8)
    .rgb()
    .string();

  const imageBorderColor = color(theme.colors.text)
    .alpha(0.15)
    .rgb()
    .string();

  return (
    <TouchableRipple onPress={() => props.onPress(props.id)}>
      <Surface style={styles.container}>
        <View style={styles.leftColumn}>
          <Avatar.Image source={{ uri: props.avatar }} size={60} />
        </View>
        <View style={styles.rightColumn}>
          <View style={styles.topRow}>
            <Title>{props.name}</Title>
            <Caption style={styles.handle}>{props.handle}</Caption>
            <Caption style={[styles.handle, styles.dot]}>{'\u2B24'}</Caption>
            <Caption>{props.date}</Caption>
          </View>
          <Text style={{ color: contentColor }}>{props.content}</Text>
          <Image
            source={{ uri: props.image }}
            style={[
              styles.image,
              {
                borderColor: imageBorderColor,
              },
            ]}
          />
          <View style={styles.bottomRow}>
            <TouchableOpacity
              onPress={() => {}}
              hitSlop={{ top: 10, bottom: 10 }}
            >
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="comment-outline"
                  size={12}
                  color={iconColor}
                />
                <Caption style={styles.iconDescription}>
                  {props.comments}
                </Caption>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              hitSlop={{ top: 10, bottom: 10 }}
            >
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="share-outline"
                  size={14}
                  color={iconColor}
                />
                <Caption style={styles.iconDescription}>
                  {props.retweets}
                </Caption>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              hitSlop={{ top: 10, bottom: 10 }}
            >
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="heart-outline"
                  size={12}
                  color={iconColor}
                />
                <Caption style={styles.iconDescription}>{props.hearts}</Caption>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Surface>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingRight: 15,
  },
  leftColumn: {
    width: 100,
    alignItems: 'center',
  },
  rightColumn: {
    flex: 1,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  handle: {
    marginRight: 3,
  },
  dot: {
    fontSize: 3,
  },
  image: {
    borderWidth: StyleSheet.hairlineWidth,
    marginTop: 10,
    borderRadius: 20,
    width: '100%',
    height: 150,
  },
  bottomRow: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconDescription: {
    marginLeft: 2,
    lineHeight: 12,
  },
});
