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
  const navigation = useNavigation();

  const [profileImg, setProfileImg] = useState<string[]>([]);
  const [startupImg, setStartupIMg] = useState<string[]>([]);

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');

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

  async function handleSubmit() {
    console.log({
      name,
      date,
      description,
      email,
      profileImg,
      startupImg,
    });

    const data = new FormData();

    data.append('name', name);
    data.append('date', date);
    data.append('description', description);
    data.append('email', email);

    profileImg.forEach((image, index) => {
      data.append('images', {
        name: `image_${index}.jpg`,
        type: 'image/jpg',
        uri: image,
      } as any);
    });

    startupImg.forEach((image, index) => {
      data.append('images', {
        name: `image_${index}.jpg`,
        type: 'image/jpg',
        uri: image,
      } as any);
    });

    // await api.post('user', data);

    navigation.navigate('Success');
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
          <Input
            placeholder="Ex: SputRocket"
            value={name}
            onChangeText={text => setName(text)}
          />

          <Label>Ano de Criação</Label>
          <Input
            placeholder="Ex: 24/11/1998"
            value={date}
            onChangeText={text => setDate(text)}
          />

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
          <Input
            box
            multiline
            value={description}
            onChangeText={text => setDescription(text)}
          />

          <Label>Nickname</Label>
          <Input />

          <Label>E-mail</Label>
          <Input value={email} onChangeText={text => setEmail(text)} />
        </FormContainer>

        <Footer>
          <Button onPress={handleSubmit}>
            <ButtonText>CADASTRAR</ButtonText>
          </Button>
        </Footer>
      </Container>
    </>
  );
};

export default Startup;

// () => natigation.navigate('Header')
