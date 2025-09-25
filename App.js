// App.js
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,               // take full height
    justifyContent: 'center', // center vertically
    alignItems: 'center',     // center horizontally
    backgroundColor: '#f0f8ff', // light background
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  },
});
