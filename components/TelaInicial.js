import React from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';

const TelaInicial = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo3.png')}
        style={styles.logo}
      />
      <View style={styles.card}>
        <Text style={styles.text}>Entre agora e comece a ajudar!</Text>
      </View>
      <Button
        title="Entrar"
        onPress={() => navigation.navigate('TelaHome')}
        color="#a4133c"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#a4133c',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TelaInicial;
