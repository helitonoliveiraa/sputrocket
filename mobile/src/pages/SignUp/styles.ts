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

export const ButtonStarup = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #9900cc;
  width: 220px;
  height: 52px;
  border-radius: 35px;
  padding: 0 20px;
  margin-top: 20px;
`;

export const ButtonStarupText = styled.Text`
  font-family: 'Roboto_700Bold_Italic';
  color: #fff;
  font-size: 16px;
`;

export const ButtonPerson = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #8200ad;
  width: 220px;
  height: 52px;
  border-radius: 35px;

  padding: 0 23px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const ButtonPersonText = styled.Text`
  font-family: 'Roboto_700Bold_Italic';
  color: #fff;
  font-size: 16px;
`;
