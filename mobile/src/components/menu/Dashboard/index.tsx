import React from 'react';
import { Text, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  Header,
  ProfileContainer,
  Image,
  TitleContainer,
  Name,
  LocationContainer,
  Location,
  Dot,
  Line,
  Body,
  Photo,
  LabelContainer,
  LabelTitle,
} from './styles';

const Dashboard: React.FC = () => (
  <Container>
    <Header>
      <ProfileContainer>
        <Image
          source={{
            uri:
              'https:avatars1.githubusercontent.com/u/8716595?s=60&u=821c2ae4258a4526c65695dd596a9201c9d682fc&v=4',
          }}
        />
        <TitleContainer>
          <Name>Héliton Oliveira</Name>
          <Line />
          <LocationContainer>
            <Dot />
            <Location>Porto Velho - RO</Location>
          </LocationContainer>
        </TitleContainer>
      </ProfileContainer>

      <Feather name="more-vertical" size={24} color="#9900cc" />
    </Header>

    <Body>
      <Photo
        source={{
          uri:
            'https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        }}
      />

      <LabelContainer>
        <LabelTitle>Programados</LabelTitle>
      </LabelContainer>
    </Body>
  </Container>
);

export default Dashboard;
