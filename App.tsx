import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Firstscreen from './src/screens/Firstscreen'; // Örnek: Ana sayfanızın kodunu içe aktarın
import SecondScreen from './src/screens/SecondScreen'; // Örnek: İkinci sayfanızın kodunu içe aktarın
import KayitEkrani from './src/screens/KayitEkrani'; // Örnek: İkinci sayfanızın kodunu içe aktarın
import { Button, StyleSheet } from 'react-native';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './src/redux';
import AydinlatmaMetini from "./src/screens/AydinlatmaMetini";
import KullaniciSozlesmesi from "./src/screens/KullaniciSozlesmesi";
import AnaEkran from './src/screens/AnaEkran';
import AkdenizMutfagi from "./src/screens/AkdenizMutfagi";
import Yemekler from './src/screens/Yemekler';
import EgeMutfagi from "./src/screens/EgeMutfagi";
import KaradenizMutfagi from "./src/screens/KaradenizMutfagi";
import DoguMutfagi from './src/screens/DoguAnadoluMutfagi';
import GuneyDoguMutfagi from './src/screens/GuneyDoguAnadoluMutfagi';
import IcAnadoluMutfagi from './src/screens/IcAnadoluMutfagi';
import MarmaraMutfagi from './src/screens/MarmaraMutfagi';

const Stack = createNativeStackNavigator();

function App() {
  const store = configureStore({
    reducer: rootReducer, // rootReducer'ı configureStore'a geçirin
  });
  return (
  <Provider store={store}>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Senin Mutfağın" component={Firstscreen} options={{
          headerStyle:{backgroundColor:"black"},
          headerTintColor:"white"
          
        }} />
        <Stack.Screen name="SecondScreen" component={SecondScreen}options={{
          headerStyle:{backgroundColor:"#ff9778"},
          headerBackVisible:false,
          
        }} />
        <Stack.Screen name="KayitEkrani" component={KayitEkrani}options={{
          headerStyle:{backgroundColor:"black"},
          headerBackVisible:false,  
          headerTintColor:"white",
        }} />
         <Stack.Screen name="AydinlatmaMetini" component={AydinlatmaMetini}options={{
          headerStyle:{backgroundColor:"black"},
          headerBackVisible:false,  
          headerTintColor:"white",
        }} />
        <Stack.Screen name="KullaniciSozlesmesi" component={KullaniciSozlesmesi}options={{
          headerStyle:{backgroundColor:"black"},
          headerBackVisible:false,  
          headerTintColor:"white",
        }} />
         <Stack.Screen name="AnaEkran" component={AnaEkran}options={{
          headerStyle:{backgroundColor:"black"},
          headerBackVisible:false,  
          headerTintColor:"white",


        }} />
         <Stack.Screen name="AkdenizMutfagi" component={AkdenizMutfagi}options={{
          headerStyle:{backgroundColor:"black"},
          headerBackVisible:false,  
          headerTintColor:"white",
          headerTitle:"Akdeniz Mutfağı"
        }} />
          <Stack.Screen name="Yemekler" component={Yemekler}options={{
          headerStyle:{backgroundColor:"black"},
          headerBackVisible:false,  
          headerTintColor:"white",
          headerTitle:"Yemekler"
        }} />

        <Stack.Screen name="EgeMutfagi" component={EgeMutfagi}options={{
          headerStyle:{backgroundColor:"black"},
          headerBackVisible:false,  
          headerTintColor:"white",
          headerTitle:"Ege Mutfağı"
        }} />
         <Stack.Screen name="KaradenizMutfagi" component={KaradenizMutfagi}options={{
          headerStyle:{backgroundColor:"black"},
          headerBackVisible:false,  
          headerTintColor:"white",
          headerTitle:"Karadeniz Mutfağı"
        }} />
             <Stack.Screen name="DoguAnadoluMutfagi" component={DoguMutfagi}options={{
          headerStyle:{backgroundColor:"black"},
          headerBackVisible:false,  
          headerTintColor:"white",
          headerTitle:"Doğu Anadolu Mutfağı"
        }} />
            <Stack.Screen name="GuneyDoguAnadoluMutfagi" component={GuneyDoguMutfagi}options={{
          headerStyle:{backgroundColor:"black"},
          headerBackVisible:false,  
          headerTintColor:"white",
          headerTitle:"Güneydoğu Anadolu Mutfağı"
        }} />
         <Stack.Screen name="IcAnadoluMutfagi" component={IcAnadoluMutfagi}options={{
          headerStyle:{backgroundColor:"black"},
          headerBackVisible:false,  
          headerTintColor:"white",
          headerTitle:"İç Anadolu Mutfağı"
        }} />
        <Stack.Screen name="MarmaraMutfagi" component={MarmaraMutfagi}options={{
          headerStyle:{backgroundColor:"black"},
          headerBackVisible:false,  
          headerTintColor:"white",
          headerTitle:"Marmara Mutfağı"
        }} />
   

      </Stack.Navigator>
    </NavigationContainer>
      </Provider>
   
  );
}

const styles=StyleSheet.create({
  background:{
      flex:1,
      backgroundColor:"#ffc34d"
  },
  })
  

export default App;