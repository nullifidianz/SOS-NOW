import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import Header from '../components/Header';

const dados = [
  { id: '1', nome: 'ONG Educação para Todos', causa: 'Educação', pix: 'contato@educacaotodos.org' },
  { id: '2', nome: 'Instituto Saúde e Vida', causa: 'Saúde', pix: 'doacoes@saudevida.org' },
  { id: '3', nome: 'Associação Verde Esperança', causa: 'Meio Ambiente', pix: 'apoie@verdeesperanca.org' },
  { id: '4', nome: 'Abrigo Animal Feliz', causa: 'Proteção Animal', pix: 'ajude@animalfeliz.org' },
  { id: '5', nome: 'Centro de Assistência Social', causa: 'Assistência Social', pix: 'ajuda@assistenciasocial.org' },
  { id: '6', nome: 'Fundação Cultura Viva', causa: 'Cultura', pix: 'contato@culturaviva.org' },
  { id: '7', nome: 'Projeto Esporte para Todos', causa: 'Esporte', pix: 'doe@esportetodos.org' },
  { id: '8', nome: 'Inovação Tech', causa: 'Tecnologia', pix: 'apoio@inovacaotech.org' },
  { id: '9', nome: 'Movimento Vida Melhor', causa: 'Combate à Fome', pix: '12345678901' },
  { id: '10', nome: 'Associação Bem-Estar Animal', causa: 'Proteção Animal', pix: '23456789012' },
  { id: '11', nome: 'Fundação Novo Futuro', causa: 'Educação', pix: '34567890123' },
  { id: '12', nome: 'ONG Saúde Integral', causa: 'Saúde', pix: '45678901234' },
  { id: '13', nome: 'Projeto Limpa Terra', causa: 'Meio Ambiente', pix: '56789012345' },
  { id: '14', nome: 'Associação Cultural Raízes', causa: 'Cultura', pix: '67890123456' },
  { id: '15', nome: 'Centro de Tecnologia Avançada', causa: 'Tecnologia', pix: '78901234567' },
  { id: '16', nome: 'Abrigo Esperança Viva', causa: 'Assistência Social', pix: '89012345678' },
  { id: '17', nome: 'Fundação Esporte e Saúde', causa: 'Esporte', pix: '90123456789' },
  { id: '18', nome: 'Casa de Acolhimento Amor', causa: 'Proteção Animal', pix: '98765432100' },
  { id: '19', nome: 'Instituto de Pesquisa Ambiental', causa: 'Meio Ambiente', pix: 'doacoes@pesquisaambiental.org' },
  { id: '20', nome: 'Rede de Apoio Estudantil', causa: 'Educação', pix: 'contribua@redeapoioestudantil.org' },
];

export default function TelaDoacao() {
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

  return (
    <View style={styles.container}>
      <Header title="Tela de Doações" />
      <FlatList
        data = {dados}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.content}
      />
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
});