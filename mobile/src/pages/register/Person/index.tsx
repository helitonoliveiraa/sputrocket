import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import logoPerson from '../../../assets/logo-person.png';

import {
  Container,
  FormContainer,
  HeaderContainer,
  Header,
  PhotoPerfil,
  ImagePreviw,
  LineThin,
  Label,
  Input,
  Button,
  ButtonText,
  Footer,
} from './styles';

const Person: React.FC = () => {
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
    <>
      <StatusBar backgroundColor="#9900cc" barStyle="light-content" />
      <Container>
        <FormContainer>
          <HeaderContainer>
            <Header>
              <PhotoPerfil onPress={handleSelectImage}>
                {image.length === 0 ? (
                  <ImagePreviw source={logoPerson} />
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

          <Label>Nome Completo</Label>
          <Input placeholder="ex: Marcos viana" />

          <Label>Data de Nascimento</Label>
          <Input placeholder="ex: 12/05/2000" />

          <Label>Número de Telefone</Label>
          <Input />

          <Label>E-mail</Label>
          <Input />
        </FormContainer>

        <Footer>
          <Button>
            <ButtonText>CADASTRAR</ButtonText>
          </Button>

          <LineThin />
        </Footer>
      </Container>
    </>
  );
};

export default Person;
