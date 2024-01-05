import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { Image, StyleSheet } from 'react-native'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Image source={require('../assets/startscreen-1.jpg')} style={{width:330, height:300, borderBottomLeftRadius:170, borderBottomRightRadius:50}} />
      <Header>ROMATEM'e Hoşgeldiniz</Header>
      <Paragraph>
        Romatem ile tüm tedavilerinizi yönetin
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Giriş Yap
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Üye Ol
      </Button>
    </Background>
  )
}
