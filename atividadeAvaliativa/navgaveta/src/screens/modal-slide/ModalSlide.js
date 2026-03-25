import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { styles } from './ModalSlide.styles';

export function ModalSlide() {
  const[visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Animação: Slide</Text>
      
      <TouchableOpacity style={styles.openButton} onPress={() => setVisible(true)}>
        <Text style={styles.buttonText}>Abrir Modal (Slide)</Text>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Tudo Certo!</Text>
            <Text style={styles.modalText}>Este modal apareceu com o efeito Slide (Deslizamento).</Text>
            
            <TouchableOpacity style={styles.closeButton} onPress={() => setVisible(false)}>
              <Text style={styles.buttonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}