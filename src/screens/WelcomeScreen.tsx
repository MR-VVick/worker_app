import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'

const WelcomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={styles.welcomeText}>Welcome</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    welcomeText: {
      fontSize: 56,
      color: '#000',
      textAlign: 'center',
      fontFamily: 'IBMPlexMono-Bold',
      marginBottom: 50,
      lineHeight: 60,
      opacity: 0.7,
    },
});

export default WelcomeScreen