import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './Scroll.styles';

const mockData = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  title: `Notificação ${i + 1}`,
  description: 'Esta é uma mensagem de teste sendo renderizada dentro de um ScrollView padrão.',
}));

export function Scroll() {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>ScrollView</Text>
      
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {mockData.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardText}>{item.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}