import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Header from '../components/Header';
import firebase from '../config/firebase';

export default function TelaBancoDeDados() {
  const [mensagens, setMensagens] = useState([]);

  useEffect(() => {
    const mensagensRef = firebase.database().ref('mensagens');
    mensagensRef.on('value', (snapshot) => {
      const mensagens = snapshot.val();
      if (mensagens) {
        console.log('Mensagens carregadas:', mensagens);  
        setMensagens(Object.values(mensagens));
      } else {
        console.log('Nenhuma mensagem encontrada.');
      }
    }, (error) => {
      console.error('Erro ao carregar mensagens:', error);
    });
  }, []);

  const abrirLocalizacaoNoNavegador = (latitude, longitude) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(url).catch(err => console.error('Erro ao abrir URL:', err));
  };

  return (
    <View style={styles.container}>
      <Header title="Banco de Dados" />
      <ScrollView style={styles.scrollView}>
        {mensagens.map((mensagem, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.card} 
            onPress={() => abrirLocalizacaoNoNavegador(mensagem.latitude, mensagem.longitude)}
          >
            <Text style={styles.messageText}>{mensagem.mensagem}</Text>
            <Text style={styles.locationText}>Latitude: {mensagem.latitude}</Text>
            <Text style={styles.locationText}>Longitude: {mensagem.longitude}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF2F4',
  },
  scrollView: {
    marginHorizontal: 16,
  },
  card: {
    borderWidth: 1,
    borderColor: '#8D99AE',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
  },
  messageText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  locationText: {
    fontSize: 14,
    color: '#8D99AE',
  },
});
