import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { OlaMundo } from './components/ola-mundo/OlaMundo';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <OlaMundo text="Olá, mundo!"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});