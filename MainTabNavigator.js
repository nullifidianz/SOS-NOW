import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import TelaHome from './telas/TelaHome';
import TelaDoacao from './telas/TelaDoacao';
import TelaGPS from './telas/TelaGPS';
import TelaDB from './telas/TelaDB';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'TelaDoacao') {
            iconName = 'book';
          } else if (route.name === 'TelaGPS') {
            iconName = 'gps-fixed';
          } else if(route.name === 'TelaDB'){
            iconName = 'cloud'
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#EF233C',
        tabBarInactiveTintColor: '#8D99AE',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={TelaHome} options={{ title: 'Home' }} />
      <Tab.Screen name="TelaDoacao" component={TelaDoacao} options={{ title: 'Doações' }} />
      <Tab.Screen name="TelaGPS" component={TelaGPS} options={{ title: 'GPS' }} />
      <Tab.Screen name="TelaDB" component={TelaDB} options={{ title: 'DB' }} />
    </Tab.Navigator>
  );
}