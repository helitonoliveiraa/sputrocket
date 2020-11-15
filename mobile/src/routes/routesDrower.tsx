import React from 'react';
import { Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import logoImg from '../assets/logo.png';

import Dashboard from '../components/menu/Dashboard';
import Help from '../components/menu/Help';
import Configuration from '../components/menu/Configuration';
import About from '../components/menu/About';

const Drawer = createDrawerNavigator();

const DrowerNavigator: React.FC = () => (
  <Drawer.Navigator
    screenOptions={{
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#9900cc',
      },
      headerTitleAlign: 'center',
    }}
  >
    <Drawer.Screen
      options={{
        headerTitle: () => (
          <Image source={logoImg} resizeMode="cover" width={100} />
        ),
      }}
      name="Dashboard"
      component={Dashboard}
    />

    <Drawer.Screen name="Help" component={Help} />
    <Drawer.Screen name="Configuration" component={Configuration} />
    <Drawer.Screen name="About" component={About} />
  </Drawer.Navigator>
);

export default DrowerNavigator;
