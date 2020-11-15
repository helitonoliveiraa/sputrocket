import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #fffce0;
`;

export const Image = styled.Image`
  width: 250px;
`;

export const Title = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 40px;
  color: #9900cc;
  margin-top: 32px;
`;

export const Button = styled(RectButton)`
  width: 120px;
  height: 56px;
  margin-top: 24px;
  border-radius: 20px;
  background: #9900cc;
  align-items: center;
  justify-content: center;
`;
