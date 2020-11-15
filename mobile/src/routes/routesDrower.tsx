import React from 'react';
import { Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RectButton } from 'react-native-gesture-handler';

import logoImg from '../assets/logo.png';

import Profile from '../components/menu/Profile';
import Help from '../components/menu/Help';
import Configuration from '../components/menu/Configuration';
import About from '../components/menu/About';

import SignOut from '../components/SignOut';

const Drawer = createDrawerNavigator();

// const SignOut: React.FC = ({ home }) => {
//   const { navigate } = useNavigation();
//   return (
//     <RectButton onPress={() => navigate('Dashboard')}>
//       <Text>Sair</Text>
//     </RectButton>
//   );
// };

const DrowerNavigator: React.FC = ({ home }) => (
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
      name="Profile"
      component={Profile}
    />

    <Drawer.Screen name="Help" component={Help} />
    <Drawer.Screen name="Configuration" component={Configuration} />
    <Drawer.Screen name="About" component={About} />

    <Drawer.Screen name="Sair" component={SignOut} />
  </Drawer.Navigator>
);

export default DrowerNavigator;
