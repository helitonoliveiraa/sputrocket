import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  margin: 0 20px;
`;

export const InputContainer = styled.View`
  position: absolute;
  top: 47%;
`;

export const InputEmail = styled.TextInput`
  height: 55px;
  width: 320px;
  border-width: 1px;
  border-radius: 35px;
  border-color: #9900cc;
  padding: 0 20px;
  background: #fff;
  color: #333;
  text-align: center;
  font-family: 'Roboto_700Bold_Italic';
`;

export const InputPassword = styled.TextInput`
  height: 55px;
  width: 320px;
  border-width: 1px;
  border-radius: 35px;
  border-color: #9900cc;
  padding: 0 20px;
  background: #fff;
  color: #333;
  text-align: center;
  font-family: 'Roboto_700Bold_Italic';

  margin-top: 6px;
`;

export const ButtonLogin = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #9900cc;
  height: 52px;
  border-radius: 35px;

  padding: 0 23px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const ButtonLoginText = styled.Text`
  font-family: 'Roboto_700Bold_Italic';
  color: #fff;
  font-size: 16px;
`;
