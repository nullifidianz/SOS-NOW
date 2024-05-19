import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import firebase from '../config/firebase';

export default function TelaDoacao() {
  const [dados, setDados] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const doacoesRef = firebase.database().ref('doacoes');
    doacoesRef.on('value', (snapshot) => {
      const doacoes = snapshot.val();
      if (doacoes) {
        setDados(Object.values(doacoes));
      } else {
        setDados([]);
      }
    });
  }, []);

  const copyToClipboard = async (pix) => {
    await Clipboard.setStringAsync(pix);
    Alert.alert('Copiado!', `O PIX ${pix} foi copiado para a área de transferência.`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.nome}</Text>
      <Text>{item.causa}</Text>
      <TouchableOpacity onPress={() => copyToClipboard(item.pix)}>
        <Text style={styles.pix}>PIX: {item.pix}</Text>
      </TouchableOpacity>
    </View>
  );

  const adicionarDoacao = () => {
    navigation.navigate('AddDoacao');
  };

  return (
    <View style={styles.container}>
      <Header title="Tela de Doações" />
      <FlatList
        data={dados}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.content}
      />
      <TouchableOpacity style={styles.floatingButton} onPress={adicionarDoacao}>
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
    backgroundColor: '#EDF2F4',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2B2D42',
  },
  pix: {
    color: '#EF233C',
    marginTop: 8,
    textDecorationLine: 'underline',
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
    fontSize: 30,
    fontWeight: 'bold',
  },
});
