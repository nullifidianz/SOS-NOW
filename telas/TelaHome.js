import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
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
      <View style={styles.content}>
        <Text style={styles.title}>Tela Inicial</Text>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
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
    fontWeight:'bold',
    marginLeft: 10,
    fontSize: 18,
  },
});
