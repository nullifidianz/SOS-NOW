import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, TouchableOpacity, Text, Alert } from 'react-native';
import firebase from '../config/firebase';

export default function TelaCadastro({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleCadastro = () => {
    firebase.auth()
      .createUserWithEmailAndPassword(username, password)
      .then(() => {
        Alert.alert('Usuário cadastrado com sucesso!');
        navigation.navigate('Login');
      })
      .catch(error => {
        const errorCode = error.code;
        let errorMessage = '';

        switch (errorCode) {
          case 'auth/email-already-in-use':
            errorMessage = 'Esse email já está em uso';
            break;
          case 'auth/weak-password':
            errorMessage = 'Senha fraca, digite outra senha';
            break;
          case 'auth/invalid-email':
            errorMessage = 'Formato do email inválido';
            break;
          default:
            errorMessage = 'Ocorreu um erro desconhecido';
        }

        Alert.alert('Erro', errorMessage);
      });
  };
  return (
    <View style={styles.container}>
      <Image source={require('../assets/LOGO-2-SEM-FUNDO.png')} style={styles.logo} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome de usuário"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <View style={styles.cadastroContainer}>
        <Text style={styles.cadastroText}>Já tem uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.cadastroText, styles.cadastroLink]}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#EDF2F4',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: '#8D99AE',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    backgroundColor: '#FFFFFF',
  },
  error: {
    color: '#D90429',
    marginBottom: 12,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#D90429',
    padding: 15,
    borderRadius: 8,
    marginBottom: 16,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#EDF2F4',
    fontSize: 18,
  },
  cadastroContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cadastroText: {
    color: '#2B2D42',
    marginRight: 5,
  },
  cadastroLink: {
    textDecorationLine: 'underline',
  },
});
