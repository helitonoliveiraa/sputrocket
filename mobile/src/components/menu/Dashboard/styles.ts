import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
`;

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

export const Image = styled.Image.attrs({
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
  margin-top: 15px;
`;

export const LabelTitle = styled.Text``;
