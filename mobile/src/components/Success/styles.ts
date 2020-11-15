import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #37c77f;
`;

export const Image = styled.Image`
  width: 250px;
`;

export const Title = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 40px;
  color: #fff;
  margin-top: 32px;
`;

export const Description = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: 20px;
  line-height: 30px;
  color: #fff;
  text-align: center;
  width: 310px;
  margin-top: 18px;
`;

export const Button = styled(RectButton)`
  width: 120px;
  height: 56px;
  margin-top: 24px;
  border-radius: 20px;
  background: #19c06d;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 15px;
  color: #fff;
`;
