import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../components/Header';

export default function TelaHome({ navigation }) {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Header title="Início" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Bem vindo!</Text>
        <Text style={styles.paragrafo}>
        Utilize os botões abaixo para navegar pelas diferentes funcionalidades do aplicativo. Você pode encontrar locais para doação ou acessar o GPS para ver as mensagens próximas a sua região.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TelaDoacao')}
        >
          <MaterialIcons name="book" size={24} color="#EDF2F4" />
          <Text style={styles.buttonText}>Onde Doar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TelaGPS')}
        >
          <MaterialIcons name="gps-fixed" size={24} color="#EDF2F4" />
          <Text style={styles.buttonText}>GPS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.logoutButton]}
          onPress={handleLogout}
        >
          <MaterialIcons name="logout" size={24} color="#EDF2F4" />
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#EDF2F4',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#2B2D42',
  },
  paragrafo: {
    fontSize: 16,
    color: '#2B2D42',
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D90429',
    padding: 15,
    borderRadius: 8,
    marginBottom: 16,
    width: '80%',
  },
  logoutButton: {
    backgroundColor: '#8D99AE',
  },
  buttonText: {
    color: '#EDF2F4',
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 18,
  },
});
