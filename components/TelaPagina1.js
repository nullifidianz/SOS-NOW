import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, AsyncStorage, Alert, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const TelaPagina1 = () => {
  const navigation = useNavigation();
  const [mensagem, setMensagem] = useState('');
  const [mensagensSalvas, setMensagensSalvas] = useState([]);

  useEffect(() => {
    pedirPermissaoLocalizacao();
    carregarMensagensSalvas();
  }, []);

  const pedirPermissaoLocalizacao = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'Para enviar sua localização, permita o acesso ao GPS.');
    }
  };

  const carregarMensagensSalvas = async () => {
    try {
      const mensagens = await AsyncStorage.getItem('mensagens');
      if (mensagens) {
        setMensagensSalvas(JSON.parse(mensagens));
      }
    } catch (error) {
      console.error('Erro ao carregar mensagens salvas: ', error);
      Alert.alert('Erro', 'Ocorreu um erro ao carregar as mensagens salvas.');
    }
  };

  const enviarMensagemComLocalizacao = async () => {
    if (!mensagem.trim()) {
      Alert.alert('Mensagem vazia', 'Por favor, escreva uma mensagem antes de enviar.');
      return;
    }

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'Para enviar sua localização, permita o acesso ao GPS.');
      return;
    }

    try {
      const location = await Location.getCurrentPositionAsync({});
      const mensagemComLocalizacao = {
        mensagem: mensagem,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      };
      await salvarMensagemComLocalizacao(mensagemComLocalizacao);
      setMensagem('');
      setMensagensSalvas([...mensagensSalvas, mensagemComLocalizacao]);
      Alert.alert('Mensagem enviada com sucesso');
    } catch (error) {
      console.error('Erro ao obter localização: ', error);
      Alert.alert('Erro', 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
    }
  };

  const salvarMensagemComLocalizacao = async (mensagemComLocalizacao) => {
    try {
      let mensagens = await AsyncStorage.getItem('mensagens');
      if (mensagens) {
        mensagens = JSON.parse(mensagens);
      } else {
        mensagens = [];
      }
      mensagens.push(mensagemComLocalizacao);
      await AsyncStorage.setItem('mensagens', JSON.stringify(mensagens));
    } catch (error) {
      console.error('Erro ao salvar mensagem: ', error);
      Alert.alert('Erro', 'Ocorreu um erro ao salvar a mensagem.');
    }
  };

  const verLogMensagens = () => {
    navigation.navigate('LogMensagens');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Geolocalização</Text>
        <View style={{ flex: 1 }} /> {/* Adiciona um espaçador flexível */}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua mensagem"
          value={mensagem}
          onChangeText={text => setMensagem(text)}
          placeholderTextColor="#333" // Altera a cor do placeholder
        />
        <TouchableOpacity onPress={enviarMensagemComLocalizacao} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
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
      <TouchableOpacity onPress={verLogMensagens} style={styles.logButton}>
        <Text style={styles.logButtonText}>Ver Log de Mensagens</Text>
      </TouchableOpacity>
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
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 80, 
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff', 
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
  sendButton: {
    backgroundColor: '#d9d9d9',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginLeft: 10, 
  },
  sendButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logButton: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  logButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TelaPagina1;
