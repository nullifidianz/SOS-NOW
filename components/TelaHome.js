import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TelaHome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Bem-vindo à Tela Home</Text>
      </View>

      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate('TelaPagina1')}>
          <View style={styles.buttonContent}>
            <Icon name="map-marker" size={30} color="white" />
            <Text style={styles.buttonText}>Marcar no mapa</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate('TelaPagina2')}>
          <View style={styles.buttonContent}>
            <Icon name="money" size={30} color="white" />
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
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  header: {
    position: 'absolute',
    alignContent: "center",
    top: 0,
    width: '100%',
    backgroundColor: '#a4133c', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  card: {
    width: '80%',
    aspectRatio: 1,
    marginBottom: 20,
    backgroundColor: '#a4133c', 
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
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TelaHome;
