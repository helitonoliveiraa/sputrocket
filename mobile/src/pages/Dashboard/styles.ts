import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  padding-top: 90px;

  margin: 0 20px;
`;

export const Title = styled.Text`
  color: #9900cc;
  font-size: 40px;
  line-height: 40px;
  width: 350px;
  font-family: 'Roboto_700Bold_Italic';
  text-align: center;

  position: absolute;
  padding-top: 40px;
`;

export const ButtonSignUp = styled(RectButton)`
  align-items: center;
  justify-content: center;
  background: #8200ad;
  width: 200px;
  height: 52px;
  border-radius: 35px;

  margin-top: 30px;
  margin-bottom: 20px;
`;

export const ButtonSignUpText = styled.Text`
  font-family: 'Roboto_700Bold_Italic';
  color: #fff;
  font-size: 20px;
`;
