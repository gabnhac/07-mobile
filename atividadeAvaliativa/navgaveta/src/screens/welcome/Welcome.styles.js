import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F7FA', padding: 20 },
  card: { backgroundColor: '#FFF', padding: 30, borderRadius: 16, alignItems: 'center', elevation: 4, width: '100%' },
  icon: { marginBottom: 15 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#333', marginBottom: 15 },
  description: { fontSize: 16, color: '#666', textAlign: 'center', lineHeight: 24, marginBottom: 30 },
  button: { flexDirection: 'row', backgroundColor: '#3498DB', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 8, alignItems: 'center', elevation: 2 },
  buttonIcon: { marginRight: 10 },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' }
});
