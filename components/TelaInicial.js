import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, AsyncStorage, Alert, StyleSheet, ScrollView } from 'react-native';
import * as Location from 'expo-location';

const TelaPagina1 = () => {
  const [mensagem, setMensagem] = useState('');
  const [localizacao, setLocalizacao] = useState(null);
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
      setLocalizacao(location);
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

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Geolocalização</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua mensagem"
          value={mensagem}
          onChangeText={text => setMensagem(text)}
        />
        <Button title="Enviar" onPress={enviarMensagemComLocalizacao} />
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
    backgroundColor: '#d9d9d9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#a4133c',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    width: '70%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
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
});

export default TelaPagina1;
