import { View, Text } from 'react-native'
import React from 'react'
import User from '../../components/HomeComponents/User'
// import Funding from '../../components/HomeComponents/Funding'
import Funding from '../../components/HomeComponents/Shortcuts'
import DontMiss from '../../components/HomeComponents/DontMiss'
import TransactionHistory from '../../components/HomeComponents/TransactionHistory'
import Account from '../../components/HomeComponents/Account'
import { StatusBar } from 'expo-status-bar';
// import NavBar from '../components/NavBar';
import Shortcuts from '../../components/HomeComponents/Shortcuts';
import { ScrollView } from 'react-native';



export default function Home() {
  return (
    <View className="flex-1  edges={['top']} bg-neutral-900 ">
      <StatusBar style='light'/>
      
      <View >
      <User/>
      </View>
      <ScrollView>
      <Account/>
      <Shortcuts/>
      <TransactionHistory/>
      <DontMiss/>
      </ScrollView>
     
    
    </View>
  )

}