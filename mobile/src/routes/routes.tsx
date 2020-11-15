import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Onboard from '../components/Onboard';

import Dashboard from '../pages/Dashboard';
// import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import RegisterPerson from '../pages/register/Person';
import RegisterStartup from '../pages/register/Startup';

import DrowerNavegator from './routesDrower';

const Stack = createStackNavigator();
const Routes: React.FC = () => (
  <>
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: '#fff',
          },
        }}
      >
        <Stack.Screen name="Onboard" component={Onboard} />

        <Stack.Screen name="Dashboard" component={Dashboard} />

        {/* <Stack.Screen name="SignIn" component={SignIn} /> */}
        <Stack.Screen name="SignUp" component={SignUp} />

        <Stack.Screen name="RegisterPerson" component={RegisterPerson} />
        <Stack.Screen name="RegisterStartup" component={RegisterStartup} />

        <Stack.Screen name="Header" component={DrowerNavegator} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
);

export default Routes;
