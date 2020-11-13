import React from 'react';
import { Text } from 'react-native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';

import Routes from './src/routes';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
  });

  if (!fontsLoaded) {
    return <Text>Loading..</Text>;
  }

  return <Routes />;
};

export default App;
