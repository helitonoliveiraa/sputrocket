import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

import logoPerson from '../../../assets/logo-person.png';

import api from '../../../service/api';

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
  const navigation = useNavigation();

  const [image, setImage] = useState<string[]>([]);

  const [fullName, setFullName] = useState('');
  const [date, setDate] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

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

  async function handleSubmit() {
    console.log({
      fullName,
      date,
      phone,
      email,
    });

    const data = new FormData();

    data.append('fullName', fullName);
    data.append('date', date);
    data.append('phone', phone);
    data.append('email', email);

    image.forEach((image, index) => {
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
          <Input
            placeholder="ex: Marcos viana"
            value={fullName}
            onChangeText={text => setFullName(text)}
          />

          <Label>Data de Nascimento</Label>
          <Input
            placeholder="ex: 12/05/2000"
            value={date}
            onChangeText={text => setDate(text)}
          />

          <Label>Número de Telefone</Label>
          <Input value={phone} onChangeText={text => setPhone(text)} />

          <Label>E-mail</Label>
          <Input value={email} onChangeText={text => setEmail(text)} />
        </FormContainer>

        <Footer>
          <Button onPress={handleSubmit}>
            <ButtonText>CADASTRAR</ButtonText>
          </Button>

          <LineThin />
        </Footer>
      </Container>
    </>
  );
};

export default Person;
