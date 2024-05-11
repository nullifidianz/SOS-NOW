import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Clipboard, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const TelaPagina2 = () => {
  const navigation = useNavigation();
  const locaisParaDoar = [
    { id: 1, nome: 'SOS Rio Grande do Sul', causa: 'Enchentes no RS', pix: '92.958.800/0001-38' },
    { id: 2, nome: 'Causa Animal', causa: 'Doação de alimentos para animais', pix: '987654321' },
    { id: 3, nome: 'Lar Santa Ajuda', causa: 'Ajuda Humanitária', pix: 'teste@teste.com' },
    { id: 4, nome: 'Ajuda Já!', causa: 'Ajuda Humanitária', pix: '123456789' },
  ];

  const handleCopyToClipboard = (text) => {
    Clipboard.setString(text);
    alert('PIX copiado com sucesso!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-left" size={30} color="black" />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.headerText}>Instituições para Doar</Text>
      </View>
      {locaisParaDoar.map(local => (
        <TouchableOpacity 
          key={local.id} 
          style={styles.card} 
          onPress={() => handleCopyToClipboard(local.pix)}>
          <Text style={styles.cardText}>Nome: {local.nome}</Text>
          <Text style={styles.cardText}>Causa: {local.causa}</Text>
          <Text style={styles.cardText}>Pix: {local.pix}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height:"10%",
    width:"100%",
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#a4133c',
  },
  header: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    width: '80%',
    padding: 20,
    backgroundColor: '#d9d9d9',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
});

export default TelaPagina2;



