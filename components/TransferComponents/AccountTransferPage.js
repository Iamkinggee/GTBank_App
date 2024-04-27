import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';



export default function AccountTransferPage() {
    const router = useRoute();
  return (
    <View>
      <Text>Account Transfer</Text>
    </View>
  )
}