import React from 'react';
import { Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

import backgroundImg from '../../assets/background-img.png';

import {
  Container,
  Title,
  ButtonLogin,
  ButtonLoginText,
  ButtonSignUp,
  ButtonSignUpText,
} from './styles';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Title>EMBARQUE NESSA JORNADA</Title>

      <Image source={backgroundImg} />

      <ButtonLogin onPress={() => navigation.navigate('SignIn')}>
        <ButtonLoginText>LOGIN</ButtonLoginText>
      </ButtonLogin>

      <ButtonSignUp onPress={() => navigation.navigate('SignUp')}>
        <ButtonSignUpText>CADASTRE-SE</ButtonSignUpText>
      </ButtonSignUp>

      <FontAwesome name="question-circle-o" size={30} color="#9900cc" />
    </Container>
  );
};

export default Dashboard;
