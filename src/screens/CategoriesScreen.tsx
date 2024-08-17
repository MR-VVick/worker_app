import { View, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React, { useMemo, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Category from '../components/Category';
import CarouselComponent from '../components/CarouselComponent';
import workerProfiles from '../data/workerProfiles.json';

const CategoriesScreen = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleCategorySelect = (category: string) => {
      setSelectedCategory(category);
    };

    const clearFilter = () => {
      setSelectedCategory(null);
    };

    const filteredProfiles = useMemo(() => {
      return workerProfiles.filter(profile => {
        const matchesSearchQuery =
          profile.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          profile.worker_role.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory = selectedCategory
          ? profile.worker_role.toLowerCase() === selectedCategory.toLowerCase()
          : true;

        return matchesSearchQuery && matchesCategory;
      });
  }, [searchQuery, selectedCategory]);

    const renderCategory = ({ item }: { item: { id: string; title: string; avatar: string; flag: string, worker_role: string } }) => (
      <Category
        title={item.title}
        avatar={item.avatar}
        flag={item.flag}
      />
    );

    return (
      <View style={styles.container}>
        <CarouselComponent onCategorySelect={handleCategorySelect} selectedCategory={selectedCategory}/>
        <View style={styles.subContainer}>
          <View style={styles.searchWrapper}>
            <View style={styles.searchContainer}>
              <Icon name="search" size={24} color="#888" style={styles.searchIcon} />
              <TextInput
                placeholder="Search"
                placeholderTextColor="#888"
                style={styles.input}
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
              <TouchableOpacity style={styles.micButton}>
                <Icon name="mic" size={24} color="#444" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.filterButton} onPress={clearFilter}>
              <Icon name="tune" size={24} color="#444" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={filteredProfiles}
            renderItem={renderCategory}
            keyExtractor={item => item.id}
            numColumns={4}
            contentContainerStyle={styles.gridContainer}
            columnWrapperStyle={styles.gridContainer}
          />
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  subContainer: {
    padding: 16
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginRight: 10,
    height: 50, 
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  micButton: {
    padding: 8,
  },
  filterButton: {
    width: 50,
    height: 50, 
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 8
  },
});

export default CategoriesScreen;
