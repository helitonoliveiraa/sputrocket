import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from '../components/menu/Dashboard';

import Help from '../components/menu/Help';
import Configuration from '../components/menu/Configuration';
import About from '../components/menu/About';

const Drawer = createDrawerNavigator();

const DrowerNavigator: React.FC = () => (
  <Drawer.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#9900cc',
      },
    }}
  >
    <Drawer.Screen name="SputRocket" component={Dashboard} />
    <Drawer.Screen name="Ajuda" component={Help} />
    <Drawer.Screen name="Configurações" component={Configuration} />
    <Drawer.Screen name="Sobre" component={About} />
  </Drawer.Navigator>
);

export default DrowerNavigator;
