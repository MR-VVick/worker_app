import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

interface CarouselItem {
  icon: string;
  label: string;
  category: string;
}

const carouselItems: CarouselItem[] = [
  { icon: 'stars', label: 'Astrologer', category: 'astrologer' },
  { icon: 'work', label: 'Assistant', category: 'assistant' },
  { icon: 'face', label: 'Makeup', category: 'makeup' },
  { icon: 'brush', label: 'Mehndi', category: 'mehndi' },
  { icon: 'photo-camera', label: 'Photographer', category: 'photographer' },
];

interface CarouselComponentProps {
  onCategorySelect: (category: string) => void;
  selectedCategory: string | null;
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ onCategorySelect, selectedCategory }) => {
  const COUNT = 3;

  const handleSelect = (category: string) => {
    onCategorySelect(category);
  };

  const renderItem = ({ item }: { item: CarouselItem }) => {
    const isSelected = selectedCategory === item.category;
    return (
      <TouchableOpacity
        style={[styles.carouselItem, isSelected && styles.selectedCarouselItem]}
        onPress={() => handleSelect(item.category)}
      >
        <Icon name={item.icon} size={30} color={isSelected ? '#FFA500' : '#fff'} />
        <Text style={[styles.carouselLabel, isSelected && { color: '#FFA500' }]}>
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };

  const baseOptions = {
    vertical: false,
    width: width / COUNT,
    height: width / 2,
    style: {
      width: width,
    },
  } as const;

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        {...baseOptions}
        data={carouselItems}
        renderItem={renderItem}
        scrollAnimationDuration={500}
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    height: 80,
    padding: 16,
    backgroundColor: 'grey',
  },
  carouselItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
  },
  selectedCarouselItem: {
    borderRadius: 10,
  },
  carouselLabel: {
    marginTop: 5,
    fontSize: 13,
    color: '#fff',
  },
});

export default CarouselComponent;
