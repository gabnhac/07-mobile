import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { db } from '../../config/firebaseCongif';
import { doc, setDoc } from 'firebase/firestore';

export default function FormScreen({ navigation }) {
    const [nomeCarro, setNomeCarro] = useState('');
    const [nomeCliente, setNomeCliente] = useState('');
    const [aluguelValor, setAluguelValor] = useState('');
    const [aluguelData, setAluguelData] = useState('');

    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleCreate = async () => {
        if (!nomeCarro || !nomeCliente || !aluguelValor || !aluguelData) {
            setModalMessage('Por favor, preencha todos os campos.');
            setIsSuccess(false);
            setModalVisible(true);
            return;
        }

        try {
            await setDoc(doc(db, 'alugueis', crypto.randomUUID()), {
                aluguelData,
                aluguelValor,
                nomeCarro,
                nomeCliente
            });
            setModalMessage('Registro criado com sucesso!');
            setIsSuccess(true);
            setModalVisible(true);


            setNomeCarro('');
            setNomeCliente('');
            setAluguelValor('');
            setAluguelData('');
        } catch (error) {
            setModalMessage('Erro ao criar registro.', error);
            setIsSuccess(false);
            setModalVisible(true);
        }

    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Novo Aluguel</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome do carro"
                value={nomeCarro}
                onChangeText={setNomeCarro}
            />

            <TextInput
                style={styles.input}
                placeholder="Nome do cliente"
                value={nomeCliente}
                onChangeText={setNomeCliente}
            />

            <TextInput
                style={styles.input}
                placeholder="Valor do aluguel"
                value={aluguelValor}
                onChangeText={setAluguelValor}
                keyboardType="numeric"
            />

            <TextInput
                style={styles.input}
                placeholder="Data do aluguel (DD/MM/AAAA)"
                value={aluguelData}
                onChangeText={setAluguelData}
            />

            <TouchableOpacity style={styles.button} onPress={handleCreate}>
                <Text style={styles.buttonText}>Criar</Text>
            </TouchableOpacity>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Text style={[styles.modalText, { color: isSuccess ? '#28a745' : '#dc3545' }]}>
                            {isSuccess ? 'Sucesso' : 'Erro'}
                        </Text>

                        <Text style={styles.modalMessage}>{modalMessage}</Text>

                        <TouchableOpacity style={styles.modalButton} onPress={handleCloseModal}>
                            <Text style={styles.modalButtonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: '#333',
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#28a745',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 25,
        borderRadius: 15,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalMessage: {
        fontSize: 16,
        textAlign: 'center',
        color: '#333',
        marginBottom: 20,
    },
    modalButton: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    modalButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});