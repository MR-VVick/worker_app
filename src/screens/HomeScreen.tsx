import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import WelcomeScreen from './WelcomeScreen';
import CategoriesScreen from './CategoriesScreen';

const Tab = createMaterialTopTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 14, fontFamily: 'IBMPlexMono-Bold' },
        tabBarStyle: { backgroundColor: '#f7ba98' },
        tabBarActiveTintColor: '#ff5c00',
        tabBarIndicatorStyle: { backgroundColor: '#ff5c00' },
      }}
    >
      <Tab.Screen name="Welcome" component={WelcomeScreen} />
      <Tab.Screen name="Category" component={CategoriesScreen} />
    </Tab.Navigator>
  );
};

const HomeScreen: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, marginTop: insets.top }}>
        <NavigationContainer independent={true}>
          <HomeTabs />
        </NavigationContainer>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: 480,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 56,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'IBMPlexMono-Bold',
    marginBottom: 50,
    lineHeight: 60,
    opacity: 0.7,
  },
  demoText: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'IBMPlexMono-Bold',
  },
  tabContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
