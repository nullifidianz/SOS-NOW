import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import * as Location from 'expo-location';
import firebase from '../config/firebase';

export default function TelaGPS() {
  const [mensagem, setMensagem] = useState('');
  const [mensagensSalvas, setMensagensSalvas] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    carregarMensagensFirebase();
  }, []);

  const carregarMensagensFirebase = () => {
    const mensagensRef = firebase.database().ref('mensagens');
    mensagensRef.on('value', (snapshot) => {
      const mensagens = snapshot.val();
      if (mensagens) {
        console.log('Mensagens carregadas:', mensagens); 
        setMensagensSalvas(Object.values(mensagens).reverse());
      } else {
        console.log('Nenhuma mensagem encontrada.');
      }
    }, (error) => {
      console.error('Erro ao carregar mensagens:', error);
    });
  };

  const enviarMensagem = async () => {
    try {
      if (!mensagem.trim()) {
        Alert.alert('Erro', 'Por favor, digite uma mensagem.');
        return;
      }

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão negada', 'Para enviar sua localização, permita o acesso ao GPS.');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const mensagemComLocalizacao = {
        mensagem: mensagem,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        timestamp: new Date().toISOString()
      };

      firebase.database().ref('mensagens').push(mensagemComLocalizacao);
      Alert.alert('Mensagem enviada com sucesso');
      setMensagem('');
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
    }
  };

  const irParaBancoDeDados = () => {
    navigation.navigate('TelaDB');
  };

  return (
    <View style={styles.container}>
      <Header title="Mensagens por Localização" />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua mensagem"
          value={mensagem}
          onChangeText={setMensagem}
          placeholderTextColor="#333"
        />
        <TouchableOpacity onPress={enviarMensagem} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.recentMessagesContainer}>
        <Text style={styles.recentMessagesTitle}>Últimas Mensagens:</Text>
        {mensagensSalvas.slice(0, 5).map((mensagem, index) => (
          <View key={index} style={styles.card}>
            <Text>{mensagem.mensagem}</Text>
            <Text>Latitude: {mensagem.latitude}</Text>
            <Text>Longitude: {mensagem.longitude}</Text>
          </View>
        ))}
      </View>
      <ScrollView style={styles.cardContainer}>
        {mensagensSalvas.map((mensagem, index) => (
          <View key={index} style={styles.card}>
            <Text>{mensagem.mensagem}</Text>
            <Text>Latitude: {mensagem.latitude}</Text>
            <Text>Longitude: {mensagem.longitude}</Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.floatingButton} onPress={irParaBancoDeDados}>
        <Text style={styles.floatingButtonText}>DB</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF2F4',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#8D99AE',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
  },
  sendButton: {
    backgroundColor: '#D90429',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginLeft: 10,
  },
  sendButtonText: {
    color: '#EDF2F4',
    fontWeight: 'bold',
    fontSize: 16,
  },
  recentMessagesContainer: {
    marginHorizontal: 16,
    marginBottom: 20,
  },
  recentMessagesTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  cardContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  card: {
    borderWidth: 1,
    borderColor: '#8D99AE',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
  },
  floatingButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: '#D90429',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    right: 20,
    bottom: 20,
  },
  floatingButtonText: {
    color: '#EDF2F4',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
