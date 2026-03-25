import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F7FA' },
  pageTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  openButton: { backgroundColor: '#F39C12', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8, elevation: 2 },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center' },
  modalContent: { backgroundColor: '#FFF', width: '80%', padding: 24, borderRadius: 12, alignItems: 'center', elevation: 5 },
  modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: '#333' },
  modalText: { fontSize: 16, color: '#666', textAlign: 'center', marginBottom: 20 },
  closeButton: { backgroundColor: '#E74C3C', paddingVertical: 10, paddingHorizontal: 24, borderRadius: 8, width: '100%' },
});
