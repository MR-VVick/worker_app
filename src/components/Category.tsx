import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

interface Props {
  title: string;
  avatar: string;
  flag: string
}

const Category: React.FC<Props> = ({ title, avatar, flag }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <View style={styles.flagIconContainer}>
          <Image source={{ uri: flag }} style={styles.flagIcon} />
        </View>
      </View>
      <View>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    marginBottom: 25
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 74,
    height: 74,
    borderRadius: 37, // Fully circular
  },
  flagIconContainer: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flagIcon: {
    width: 20,
    height: 20,
    borderRadius: 10, // Optional, to make it circular
  },
  title: {
    color: '#585858',
    fontSize: 16,
    textAlign: 'center',
    width: 70,
    fontFamily: 'IBMPlexMono-Regular',
  },
});

export default Category;
