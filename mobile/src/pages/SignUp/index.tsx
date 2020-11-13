import React from 'react';
import { Image, View } from 'react-native';
import { FontAwesome, Zocial, Octicons } from '@expo/vector-icons';

import backgroundImg from '../../assets/background-img.png';

import {
  Container,
  Title,
  ButtonStarup,
  ButtonStarupText,
  ButtonPerson,
  ButtonPersonText,
} from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Title>EMBARQUE NESSA JORNADA</Title>

    <Image source={backgroundImg} />

    <ButtonStarup>
      <Zocial name="email" size={24} color="#fff" />
      <ButtonStarupText>STARUP</ButtonStarupText>
      <View />
    </ButtonStarup>

    <ButtonPerson>
      <Octicons name="person" size={24} color="#fff" />
      <ButtonPersonText>PESSOA</ButtonPersonText>
      <View />
    </ButtonPerson>

    <FontAwesome name="question-circle-o" size={30} color="#9900cc" />
  </Container>
);

export default SignUp;
