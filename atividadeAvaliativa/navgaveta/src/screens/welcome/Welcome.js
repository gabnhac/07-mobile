import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './Welcome.styles';

export function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Ionicons name="rocket-outline" size={64} color="#3498DB" style={styles.icon} />
        
        <Text style={styles.title}>Bem-vindo!</Text>
        
        <Text style={styles.description}>
          Explore o aplicativo utilizando o menu lateral. Aqui você encontrará exemplos interativos de diferentes tipos de Modais e Listas com rolagem.
        </Text>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="menu-outline" size={24} color="#FFF" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Abrir Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}