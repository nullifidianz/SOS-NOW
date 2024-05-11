import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const TelaHome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Seja Bem vindo!</Text>
      </View>
      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate('TelaPagina1')}>
          <View style={styles.buttonContent}>
            <Icon name="map-marker" size={30} color="black" />
            <Text style={styles.buttonText}>Marcar no mapa</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate('TelaPagina2')}>
          <View style={styles.buttonContent}>
            <Icon name="money" size={30} color="black" />
            <Text style={styles.buttonText}>Onde Doar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor:'#a4133c'
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
    position:'absolute',
    top:'0'
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black', 
    marginLeft: 10,
  },
  card: {
    width: '80%',
    height:"20%",
    aspectRatio: 1,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    marginLeft: 10,
    color: 'black', 
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    zIndex: 1,
  },
});

export default TelaHome;
