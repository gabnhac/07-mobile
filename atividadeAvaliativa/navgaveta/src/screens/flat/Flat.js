import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './Flat.styles';

const mockData = Array.from({ length: 80 }, (_, i) => ({
  id: String(i),
  name: `Usuário Teste ${i + 1}`,
  role: i % 2 === 0 ? 'Desenvolvedor' : 'Designer',
}));

export function Flat() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardText}>Cargo: {item.role}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>FlatList</Text>
      
      <FlatList
        data={mockData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}