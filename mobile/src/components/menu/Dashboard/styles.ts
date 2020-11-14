import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 20px;
`;

export const ScrollContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ProfileContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleContainer = styled.View`
  margin-left: 10px;
`;

export const Name = styled.Text`
  font-family: 'Roboto_700Bold';
  color: #333;
  font-size: 20px;
  padding: 0 10px;
`;

export const Line = styled.View`
  height: 2px;
  background: #9900cc;
`;

export const LocationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
`;

export const Dot = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #9900cc;
  margin-right: 4px;
`;

export const Location = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: 13px;
  color: #666;
`;

export const ProfileImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;

export const Body = styled.View`
  margin-top: 20px;
`;

export const Photo = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 300px;
  border-radius: 4px;
  align-self: center;
`;

export const LabelContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;

export const LabelTitle = styled.Text`
  font-family: 'Roboto_700Bold';
  color: #333;
  font-size: 18px;
`;

export const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconHands = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 30px;
  height: 30px;
  margin-right: 4px;
`;

export const IconDots = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 30px;
  height: 30px;
`;

export const Describe = styled.Text`
  margin-top: 10px;
  font-family: 'Roboto_400Regular';
  color: #333;
  text-align: justify;
`;
