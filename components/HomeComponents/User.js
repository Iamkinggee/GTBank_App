import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/FontAwesome6';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function User() {

  return (

    <View className="flex flex-row gap-2  pt-5  bg-neutral-800  space-y-5">
     <Ionicons name="circle-user"  size={hp(3)} color="gray" style={{paddingTop:19, paddingLeft:15}}/>
      <Text className="font-semibold text-white p-2">Hello, Godsent!</Text>
    </View>
  )
}