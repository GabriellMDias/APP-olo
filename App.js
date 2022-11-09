import React from 'react'
import {View, Text, Button, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from './components/Home'

const Pilha = createNativeStackNavigator();

function telaLogin(props){
  return(
    <View>
      <Text>
        Tela Login
      </Text>
      <TextInput placeholder="E-mail" style={{backgroundColor: "gray", borderWidth: 2, margin: 10}}/>
      <TextInput placeholder="Senha" style={{backgroundColor: "gray", borderWidth: 2, margin: 10}}/>
      <Button
      title="Entrar"
      onPress = {()=>props.navigation.navigate('telaHome')}/>
      <Button 
      title="Cadastrar"
      onPress = {()=>props.navigation.navigate('telaCadastro')}/>
    </View>
  )
}

function telaCadastro(props){
  return(
    <View>
      <Text>
        Tela Cadastro
      </Text>
      <Button 
      title="Login"
      onPress = {()=>props.navigation.navigate('telaLogin')}/>
    </View>
  )
}

export default function App(){
  return(
    <NavigationContainer>
    <Pilha.Navigator>
      <Pilha.Screen 
      name="telaLogin" component={telaLogin} options={{title: 'Tela Login'}}/>
      <Pilha.Screen
      name="telaCadastro" component={telaCadastro} options={{title: 'Tela Cadastro'}}/>
      <Pilha.Screen
      name="telaHome" component={Home} options={{title: 'Tela Home'}}/>
    </Pilha.Navigator>
    </NavigationContainer>
  )
}