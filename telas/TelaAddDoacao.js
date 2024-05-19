import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import firebase from '../config/firebase';

export default function AdicionarDoacao() {
  const [nome, setNome] = useState('');
  const [causa, setCausa] = useState('');
  const [pix, setPix] = useState('');
  const navigation = useNavigation();

  const adicionarDoacao = () => {
    if (nome && causa && pix) {
      const doacao = {
        id: Date.now().toString(),
        nome,
        causa,
        pix
      };

      firebase.database().ref('doacoes').push(doacao)
        .then(() => {
          Alert.alert('Sucesso', 'Doação adicionada com sucesso');
          navigation.goBack();
        })
        .catch((error) => {
          Alert.alert('Erro', 'Erro ao adicionar doação: ' + error.message);
        });
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Adicionar Doação" />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome da ONG"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Causa"
          value={causa}
          onChangeText={setCausa}
        />
        <TextInput
          style={styles.input}
          placeholder="Chave PIX"
          value={pix}
          onChangeText={setPix}
        />
        <TouchableOpacity style={styles.button} onPress={adicionarDoacao}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF2F4',
  },
  form: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: '#8D99AE',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: '#D90429',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#EDF2F4',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
