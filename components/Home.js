import React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator()

function telaDash(props){
  return(
    <View>
      <Text>Dash</Text>
    </View>
  )
}

function telaMaps(props){
  return(
    <View>
      <Text>Maps</Text>
    </View>
  )
}

function telaConfig(props){
  return(
    <View>
      <Text>Configurações</Text>
    </View>
  )
}



export default function App(){
  return(
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen
        name="telaDash"
        component={telaDash}
        options={{
          tabBarLabel: "Dash",
          tabBarIcon: () => (
            <Icon name="dashboard" size={30}/>
          )
          }}
          />

        <Tab.Screen
        name="telaMaps"
        component={telaMaps}
        options={{
          tabBarLabel: "Maps",
          tabBarIcon: () => (
            <Icon name="map-marker" size={30}/>
          )
          }}/>

        <Tab.Screen
        name="telaConfig"
        component={telaConfig}
        options={{
          tabBarLabel: "Config",
          tabBarIcon: ()=>(
            <Icon name="gear" size={30}/>
          )
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}