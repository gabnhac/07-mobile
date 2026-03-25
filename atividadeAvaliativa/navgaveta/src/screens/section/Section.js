import React from 'react';
import { View, Text, SectionList } from 'react-native';
import { styles } from './Section.styles';

const mockSections =[
  {
    title: 'Tarefas de Casa',
    data: ['Fazer supermercado', 'Lavar o carro', 'Limpar o quintal'],
  },
  {
    title: 'Tarefas do Trabalho',
    data:['Finalizar relatório', 'Reunião com a equipe de TI', 'Responder e-mails', 'Entregar projeto'],
  },
  {
    title: 'Estudos',
    data:['Ler documentação do React Native', 'Praticar navegação', 'Assistir aula de UI/UX'],
  },
];

export function Section() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardText}>• {item}</Text>
    </View>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>SectionList</Text>

      <SectionList
        sections={mockSections}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={true}
      />
    </View>
  );
}