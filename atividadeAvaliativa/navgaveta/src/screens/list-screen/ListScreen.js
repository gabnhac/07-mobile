import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebaseCongif';

export default function ListScreen() {
  const [alugueis, setAlugueis] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAlugueis = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'alugueis'));

      const list = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      setAlugueis(list);
    } catch (error) {
      console.error('Erro ao buscar alugueis:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlugueis();
  });

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.nomeCarro}</Text>
      <Text style={styles.text}>Cliente: {item.nomeCliente}</Text>
      <Text style={styles.text}>Valor: R$ {item.aluguelValor}</Text>
      <Text style={styles.text}>Data: {item.aluguelData}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#28a745" />
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Aluguéis</Text>

      <FlatList
        data={alugueis}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhum aluguel encontrado.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#28a745',
  },
  text: {
    fontSize: 15,
    color: '#555',
  },
  emptyText: {
    textAlign: 'center',
    color: '#999',
    marginTop: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});