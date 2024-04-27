import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import Funding from './Funding'
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function Account() {
  return (
      <ScrollView className="bg-neutral-800 p-2 flex">
      <Animated.View entering={FadeInUp.delay(100).springify()} className="flex-row space-x-[100px] justify-center pt-3 " >
        <Text className=" border border-neutral-600  rounded-xl text-white p-2">Savings Account</Text>
        <Text className="  border border-neutral-600 rounded-xl p-2  text-white"> 02827454788     <MaterialIcons name="content-copy"  size={hp(2)} color={'#ff4500'}
          //  style={{
          //   paddingTop: 10
           
          // }}
          />
        
          
     
        </Text>
        
      </Animated.View>


      <View className="pt-5 pl-3 ">
        <Text className="font-bold text-[20px] text-white">N <Text className="font-bold text-[29px] text-white">26,343,441</Text>.42</Text>

        <Text className="text-[12px] text-neutral-300 pt-2">Book balance  <Text className="font-bold">N26,343,441.42</Text></Text>
      </View>


      <View>
        <Funding/>
      </View>

     




      </ScrollView>
  
  )
}