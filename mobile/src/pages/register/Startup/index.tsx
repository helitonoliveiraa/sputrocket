import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';

import startupImgLogo from '../../../assets/startup-logo.png';

import {
  Container,
  FormContainer,
  HeaderContainer,
  Header,
  LineThin,
  PhotoPerfil,
  AddStartupImg,
  ScrollContainer,
  Scroll,
  PreviewProfileImg,
  PreviwStartupImg,
  Input,
  Label,
  Button,
  ButtonText,
  Footer,
} from './styles';

const Startup: React.FC = () => {
  const natigation = useNavigation();

  const [profileImg, setProfileImg] = useState<string[]>([]);
  const [startupImg, setStartupIMg] = useState<string[]>([]);

  async function handleSelectProfileImage() {
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

    profileImg.forEach((img, index) => {
      if (index === 0) {
        profileImg.pop();
      }
    });

    setProfileImg([...profileImg, img]);

    return '';
  }

  async function handleSelectStartupImage() {
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

    setStartupIMg([...startupImg, img]);

    return '';
  }

  return (
    <>
      <StatusBar backgroundColor="#9900cc" barStyle="light-content" />
      <Container>
        <FormContainer>
          <HeaderContainer>
            <Header>
              <PhotoPerfil onPress={handleSelectProfileImage}>
                {profileImg.length === 0 ? (
                  <PreviewProfileImg source={startupImgLogo} />
                ) : (
                  profileImg.map(img => (
                    <PreviewProfileImg key={img} source={{ uri: img }} />
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

          <Label>Fotos da Startup</Label>

          <ScrollContainer>
            <AddStartupImg onPress={handleSelectStartupImage}>
              <Feather name="plus" size={24} color="black" />
            </AddStartupImg>
            <Scroll>
              {startupImg.map(img => (
                <PreviwStartupImg
                  key={`${img}-${Date.now()}`}
                  source={{ uri: img }}
                />
              ))}
            </Scroll>
          </ScrollContainer>

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
          <Button onPress={() => natigation.navigate('Header')}>
            <ButtonText>CADASTRAR</ButtonText>
          </Button>
        </Footer>
      </Container>
    </>
  );
};

export default Startup;
