import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './telas/TelaLogin';
import TelaCadastro from './telas/TelaCadastro';
import MainTabNavigator from './MainTabNavigator';
import TelaDB from './telas/TelaDB'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={TelaLogin} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="TelaDB" component={TelaDB} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}