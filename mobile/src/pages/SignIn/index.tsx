import React from 'react';
import { Image } from 'react-native';

import backgroundImg from '../../assets/image.png';

import { Container, InputContainer, InputEmail, InputPassword } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Image source={backgroundImg} />

    <InputContainer>
      <InputEmail placeholder="E-MAIL" placeholderTextColor="#9900cc" />

      <InputPassword placeholder="SENHA" placeholderTextColor="#9900cc" />
    </InputContainer>
  </Container>
);

export default SignIn;
