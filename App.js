
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './components/TelaInicial';
import TelaHome from './components/TelaHome';
import TelaPagina1 from './components/TelaPagina1';
import TelaPagina2 from './components/TelaPagina2';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen name="TelaInicial" component={TelaInicial} options={{ headerShown: false }} />
        <Stack.Screen name="TelaHome" component={TelaHome}  options={{ headerShown: false }}/>
        <Stack.Screen name="TelaPagina1" component={TelaPagina1}  options={{ headerShown: false }}/>
        <Stack.Screen name="TelaPagina2" component={TelaPagina2} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
