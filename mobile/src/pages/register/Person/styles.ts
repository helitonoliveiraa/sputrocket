import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';

interface Props {
  box?: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const FormContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  margin-bottom: 20px;
  padding: 0 20px;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  height: 160px;
`;

export const Header = styled.View`
  width: 150px;
  background: #fff;
  align-self: center;
  z-index: 5;
`;

export const Line = styled.View`
  width: 100%;
  height: 10px;
  background: #9900cc;
`;

export const LineThin = styled.View`
  height: 1px;
  background: #9900cc;
`;

export const ImagePreviw = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 144px;
  height: 144px;
  border-radius: 72px;
`;

export const PhotoPerfil = styled(TouchableOpacity).attrs({
  activeOpacity: 0.4,
})`
  width: 150px;
  height: 150px;
  border-width: 3px;
  border-radius: 75px;
  border-color: #9900cc;
  background-color: #fff;

  align-items: center;
  justify-content: center;
  margin-top: 10px;
  z-index: 5;
`;

export const Label = styled.Text`
  font-family: 'Roboto_700Bold_Italic';
  color: #9900cc;
  margin: 15px 0 0 10px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: ${({ box }) => (box ? '112px' : '45px')};
  border-width: 1px;
  border-radius: 35px;
  border-color: #9900cc;
  padding: 0 20px;
  background: #fff;
  font-family: 'Roboto_700Bold_Italic';
  margin-top: 4px;
`;

export const Button = styled(RectButton)`
  align-items: center;
  justify-content: center;
  background: #8200ad;
  height: 52px;
  border-radius: 35px;

  margin: 5px 20px 30px;
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto_700Bold_Italic';
  font-size: 20px;
  color: #fff;
`;

export const Footer = styled.View`
  width: 100%;
  background: #fff;
  padding: 0 0 10px;
`;

export const SwitchContainer = styled.View`
  margin: 20px 20px;
  align-items: center;
`;

export const SwitchText = styled.Text`
  font-family: 'Roboto_700Bold_Italic';
  color: #9900cc;
  padding: 0 10px;
`;
