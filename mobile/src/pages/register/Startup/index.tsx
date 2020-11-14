import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

import startupImgLogo from '../../../assets/startup-logo.png';

import {
  Container,
  FormContainer,
  HeaderContainer,
  Header,
  LineThin,
  PhotoPerfil,
  ImagePreviw,
  Input,
  Label,
  Button,
  ButtonText,
  Footer,
} from './styles';

const Startup: React.FC = () => {
  const [image, setImage] = useState<string[]>([]);

  async function handleSelectImage() {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status !== 'granted') {
      return Alert.alert('Ops! precisamos de acesso às suas fotos...');
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (pickerResult.cancelled) {
      return '';
    }

    const { uri: img } = pickerResult;

    image.forEach((img, index) => {
      if (index === 0) {
        image.pop();
      }
    });

    setImage([...image, img]);

    console.log(img);

    return '';
  }

  return (
    <Container>
      <FormContainer>
        <HeaderContainer>
          <Header>
            <PhotoPerfil onPress={handleSelectImage}>
              {image.length === 0 ? (
                <ImagePreviw source={startupImgLogo} />
              ) : (
                image.map(img => (
                  <ImagePreviw key={img} source={{ uri: img }} />
                ))
              )}
            </PhotoPerfil>
          </Header>
          <LineThin
            style={{
              marginTop: -75,
            }}
          />
        </HeaderContainer>

        <Label>Nome Startup</Label>
        <Input placeholder="Ex: SputRocket" />

        <Label>Ano de Criação</Label>
        <Input placeholder="Ex: 24/11/1998" />

        <Label>Descrição</Label>
        <Input box multiline />

        <Label>Nickname</Label>
        <Input />

        <Label>E-mail</Label>
        <Input />

        <Label>Senha</Label>
        <Input />
      </FormContainer>

      <Footer>
        <Button>
          <ButtonText>CADASTRAR</ButtonText>
        </Button>
      </Footer>
    </Container>
  );
};

export default Startup;
