import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    paddingTop: 20,
    backgroundColor: '#2B2D42',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#EDF2F4',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;