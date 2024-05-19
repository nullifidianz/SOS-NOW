import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, Image, TouchableOpacity, Alert } from 'react-native';
import firebase from '../config/firebase';

export default function TelaLogin({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const verificarUsuario = () => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          navigation.navigate('Main', { email: user.email });
        }
      });
    };

    verificarUsuario();
  }, [navigation]);

  const handleLogin = () => {
    firebase.auth()
      .signInWithEmailAndPassword(username, password)
      .catch(error => {
        const errorCode = error.code;
        let errorMessage = '';

        switch (errorCode) {
          case 'auth/invalid-email':
            errorMessage = 'Formato do email inválido';
            break;
          case 'auth/user-not-found':
          case 'auth/wrong-password':
            errorMessage = 'Nome de usuário ou senha inválidos';
            break;
          default:
            errorMessage = 'Ocorreu um erro desconhecido';
        }

        setError(errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/LOGO-2-SEM-FUNDO.png')}
        style={styles.logo}
      />
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <View style={styles.cadastroContainer}>
        <Text style={styles.cadastroText}>Não tem uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={[styles.cadastroText, styles.cadastroLink]}>Cadastre-se</Text>
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
    width: 500,
    height: 500,
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
