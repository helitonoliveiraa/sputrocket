import React from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Onboarding from 'react-native-onboarding-swiper';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import onboardOne from '../../assets/onboardImg/onboard1.png';
import onboardTwo from '../../assets/onboardImg/onboard2.png';
import onboardThree from '../../assets/onboardImg/onboard3.png';
import onboardFour from '../../assets/onboardImg/onboard4.png';

const NextButton: React.FC = ({ ...props }) => (
  <RectButton style={styles.button} {...props}>
    <Feather name="chevron-right" size={30} color="#fff" />
  </RectButton>
);

const DoneButton: React.FC = ({ ...props }) => {
  const natigation = useNavigation();

  return (
    <RectButton
      {...props}
      style={styles.button}
      onPress={() => natigation.navigate('Dashboard')}
    >
      <Feather name="chevron-right" size={30} color="#fff" />
    </RectButton>
  );
};

const SkipButton: React.FC = ({ ...props }) => {
  const natigation = useNavigation();

  return (
    <RectButton
      style={styles.skipButton}
      {...props}
      onPress={() => natigation.navigate('Dashboard')}
    >
      <Text style={styles.skipButtonText}>Pular</Text>
    </RectButton>
  );
};

const Square: React.FC = ({ selected }) => {
  let backgroundColor;
  if (selected) {
    backgroundColor = '#00FF00';
  } else {
    backgroundColor = 'rgba(153, 0, 204, 0.3)';
  }

  return selected ? (
    <View
      style={{
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  ) : (
    <View
      style={{
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 6,
        backgroundColor,
      }}
    />
  );
};

const Onboard: React.FC = () => (
  <>
    <StatusBar backgroundColor="#000000" barStyle="light-content" />
    <Onboarding
      containerStyles={{
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        // paddingHorizontal: 20,
        // alignItems: 'stretch',
      }}
      controlStatusBar={false}
      bottomBarColor="#fff"
      bottomBarHeight={80}
      showSkip
      DotComponent={Square}
      SkipButtonComponent={SkipButton}
      NextButtonComponent={NextButton}
      DoneButtonComponent={DoneButton}
      pages={[
        {
          backgroundColor: '#fff',
          title: 'Seja bem vindo!',
          image: (
            <Image style={(styles.image, { top: 15 })} source={onboardOne} />
          ),
          titleStyles: {
            fontSize: 20,
            color: '#9900CC',
            fontFamily: 'Roboto_700Bold',
            lineHeight: 48,
            textAlign: 'center',
            alignSelf: 'center',
            width: 217,
          },
          subtitle: 'Obrigado por ter feito o downloading da aplicação.',
          subTitleStyles: {
            color: '#9900CC',
            fontFamily: 'Roboto_700Bold',
            fontSize: 16,
            textAlign: 'center',
            alignSelf: 'center',
            width: 300,
            paddingBottom: 130,
          },
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image style={(styles.image, { top: 35 })} source={onboardTwo} />
          ),
          title: 'EMPRESA',
          titleStyles: {
            fontSize: 38,
            color: '#9900CC',
            fontFamily: 'Roboto_700Bold',
            textAlign: 'center',
            alignSelf: 'center',
            width: 217,
          },
          subtitle:
            'Quer formar parceria para montar uma startup, mas ainda não tem um time? Está no lugar certo, conheça pessoas com interesses em comum.',
          subTitleStyles: {
            color: '#9900CC',
            fontFamily: 'Roboto_700Bold',
            fontSize: 16,
            textAlign: 'justify',
            alignSelf: 'center',
            width: 270,
            paddingBottom: 130,
          },
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image style={(styles.image, { top: 15 })} source={onboardThree} />
          ),
          title: 'AMPLIE',
          titleStyles: {
            fontSize: 30,
            color: '#9900CC',
            fontFamily: 'Roboto_700Bold',
            lineHeight: 36,
            textAlign: 'center',
            alignSelf: 'center',
            width: 253,
          },
          subtitle:
            'Aumente sua visão sobre o mercado, crie novas ideias e conquiste novos horizontes!',
          subTitleStyles: {
            color: '#9900CC',
            fontFamily: 'Roboto_700Bold',
            fontSize: 16,
            textAlign: 'center',
            alignSelf: 'center',
            width: 270,
            paddingBottom: 130,
          },
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image style={(styles.image, { top: 50 })} source={onboardFour} />
          ),
          title: 'SUCESSO',
          titleStyles: {
            fontSize: 48,
            color: '#9900CC',
            fontFamily: 'Roboto_700Bold',
            textAlign: 'center',
            alignSelf: 'center',
            width: 217,
            marginTop: 0,
          },
          subtitle:
            'Atinja vôos altos com a sputrocket e aumente suas chances de sucesso, invista, crie alianças, estabeleça estratégias com parceiros e inove no mundo dos negócios',
          subTitleStyles: {
            color: '#9900CC',
            fontFamily: 'Roboto_700Bold',
            fontSize: 16,
            textAlign: 'center',
            alignSelf: 'center',
            width: 300,
            paddingBottom: 150,
          },
        },
      ]}
    />
  </>
);

export default Onboard;

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    top: -50,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9900CC',
    marginRight: 20,
  },

  skipButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    width: 56,
    height: 56,
    borderRadius: 27,
  },

  skipButtonText: {
    color: 'rgba(153, 0, 204, 0.5)',
    fontWeight: 'normal',
  },
});
