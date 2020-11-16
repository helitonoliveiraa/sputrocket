import React, { useState } from 'react';
import { StatusBar, Switch, View, Alert } from 'react-native';
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
  SwitchContainer,
  SwitchText,
  Footer,
} from './styles';

const Person: React.FC = () => {
  const navigation = useNavigation();

  const [image, setImage] = useState<string[]>([]);

  const [fullName, setFullName] = useState('');
  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState(false);
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [startup, setStartup] = useState(true);

  function toggleSwitch() {
    setGender(gender !== true);

    console.log(gender);
  }

  function toggleSwitchStartup() {
    setStartup(startup !== true);

    console.log(startup);
  }

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
    try {
      console.log({
        fullName,
        gender,
        nickname,
        date,
        phone,
        city,
        description,
        email,
        startup,
      });

      const data = new FormData();

      data.append('name', fullName);
      data.append('nickname', nickname);
      data.append('gender', String(gender));
      data.append('age', date);
      data.append('address', city);
      data.append('phone_number', phone);
      data.append('in_a_startup', String(startup));
      data.append('description', description);
      data.append('email', email);

      image.forEach((image, index) => {
        data.append('personal_profile_image', {
          name: `image_${index}.jpg`,
          type: 'image/jpg',
          uri: image,
        } as any);
      });

      await api.post('register/personal-profile', data);

      navigation.navigate('Success');
    } catch (err) {
      return Alert.alert('Falha no cadastro!');
    }

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
          <Input
            placeholder="ex: Marcos viana"
            value={fullName}
            onChangeText={text => setFullName(text)}
          />

          <SwitchContainer>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <SwitchText>Maculino</SwitchText>
              <Switch
                thumbColor="#fff"
                trackColor={{ false: '#ccc', true: '#39CC83' }}
                value={!gender}
                onValueChange={toggleSwitch}
              />
              <SwitchText>Feminino</SwitchText>
            </View>
          </SwitchContainer>

          <LineThin style={{ marginBottom: 20 }} />

          <Label>Nickname</Label>
          <Input value={nickname} onChangeText={text => setNickname(text)} />

          <Label>Data de Nascimento</Label>
          <Input
            placeholder="ex: 12/05/2000"
            value={date}
            onChangeText={text => setDate(text)}
          />

          <Label>Número de Telefone</Label>
          <Input value={phone} onChangeText={text => setPhone(text)} />

          <Label>Estado/Cidade</Label>
          <Input value={city} onChangeText={text => setCity(text)} />

          <SwitchContainer>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <SwitchText>Estou em um Startup</SwitchText>
              <Switch
                thumbColor="#fff"
                trackColor={{ false: '#ccc', true: '#39CC83' }}
                value={!startup}
                onValueChange={toggleSwitchStartup}
              />
              <SwitchText>Não tenho Startup</SwitchText>
            </View>
          </SwitchContainer>

          <LineThin style={{ marginBottom: 20 }} />

          <Label>Descrição</Label>
          <Input
            box
            multiline
            value={description}
            onChangeText={text => setDescription(text)}
          />

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
