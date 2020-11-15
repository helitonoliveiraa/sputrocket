import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Title, Button } from './styles';

const Success: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <StatusBar backgroundColor="#9900cc" barStyle="light-content" />
        <Title>Até logo!!!</Title>

        <Button onPress={() => navigation.navigate('Dashboard')}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="#fff" />
        </Button>
      </Container>
    </>
  );
};

export default Success;
