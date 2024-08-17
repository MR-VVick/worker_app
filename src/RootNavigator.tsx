import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './screens/HomeScreen';
import Logo from './assets/svg/logo.svg';
import EmptyScreen from './screens/EmptyScreen';
import { View, Text, StyleSheet } from 'react-native';

type TabParamList = {
  Chat: undefined;
  Call: undefined;
  Scan: undefined;
  Wishlist: undefined;
  Vip: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size, focused }) => {
            let iconName: string;

            switch (route.name) {
              case 'Chat':
                iconName = 'chat';
                break;
              case 'Call':
                iconName = 'call';
                break;
              case 'Scan':
                iconName = 'qr-code-scanner';
                break;
              case 'Wishlist':
                iconName = 'favorite';
                break;
              case 'Vip':
                iconName = 'local-attraction';
                break;  
              default:
                iconName = '';
            }

            return (
              <View style={styles.iconWrapper}>
                {focused && <View style={styles.activeIndicator} />}
                <Icon name={iconName} size={size} color={color} />
              </View>
            );
          },
          tabBarActiveTintColor: '#ff5c00',
          tabBarInactiveTintColor: '#001A1A',
          tabBarLabel: ({ focused }) => (
            <View style={styles.labelContainer}>
              <Text style={{ color: focused ? '#ff5c00' : '#001A1A', fontFamily: 'IBMPlexMono-Bold', fontSize: 12 }}>
                {route.name}
              </Text>
            </View>
          ),
          tabBarStyle: {                   
            height: 72,
          },
          headerTitle: () => (
            <Text style={styles.title}>Workers</Text>
          ),
          headerTitleAlign: 'center',
          headerStyle: {
            height: 80,
          },
        })}
      >
        <Tab.Screen name="Chat" component={HomeScreen} />
        <Tab.Screen name="Call" component={EmptyScreen} />
        <Tab.Screen name="Scan" component={EmptyScreen} />
        <Tab.Screen name="Wishlist" component={EmptyScreen} />
        <Tab.Screen name="Vip" component={EmptyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'IBMPlexMono-Italic',
  },
  labelContainer: {
    alignItems: 'center',
  },
  iconWrapper: {
    alignItems: 'center',
  },
  activeIndicator: {
    width: 50,
    height: 4,
    backgroundColor: '#ff5c00',
    position: 'absolute',
    top:-15,
  },
});

export default RootNavigator;
