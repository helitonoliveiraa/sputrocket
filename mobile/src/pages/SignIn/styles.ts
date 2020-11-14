import styled from 'styled-components/native';

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
  text-align: center;
  font-family: 'Roboto_700Bold_Italic';

  margin-top: 6px;
`;
