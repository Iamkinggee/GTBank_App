import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Auth from './navigation/Auth'
import SplashScreen from './navigation/Screen/SplashScreen';
import Home from './navigation/Screen/Home';
import { StatusBar } from 'expo-status-bar';



export default function App() {

  const[isShowSplash, setIsShowSplash] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setIsShowSplash(false);
    }, 1000)

  })


  return (
    <>
     <StatusBar style='light'/>
    {isShowSplash ? <SplashScreen/> : <Auth />}
    </>  
  )
}