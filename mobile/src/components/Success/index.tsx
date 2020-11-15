import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, Description, Button, ButtonText } from './styles';

const Success: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <StatusBar backgroundColor="#37c77f" barStyle="light-content" />
        <Title>Ebaaa!</Title>
        <Description>
          O cadastro deu certo e já está fazendo parte dessa platarforma
          inclível!!! :)
        </Description>

        <Button onPress={() => navigation.navigate('Profile')}>
          <ButtonText>Ok</ButtonText>
        </Button>
      </Container>
    </>
  );
};

export default Success;
