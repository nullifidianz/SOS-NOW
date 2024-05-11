import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const LogMensagens = () => {
  const navigation = useNavigation();
  const [mensagensSalvas, setMensagensSalvas] = useState([]);

  useEffect(() => {
    carregarMensagensSalvas();
  }, []);

  const carregarMensagensSalvas = async () => {
    try {
      const mensagens = await AsyncStorage.getItem('mensagens');
      if (mensagens) {
        setMensagensSalvas(JSON.parse(mensagens));
      }
    } catch (error) {
      console.error('Erro ao carregar mensagens salvas: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Log de Mensagens</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#a4133c',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#D9D9D9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
    position: 'absolute',
    top: 0,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 50,
  },
  cardContainer: {
    flex: 1,
    width: '100%',
  },
  card: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#d9d9d9',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 20,
    zIndex: 1,
  },
});

export default LogMensagens;
