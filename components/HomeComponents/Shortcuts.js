import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Shortcuts() {
  return (
    <View className="flex  bg-neutral-800 p-2">
      <Text className="text-white p-2  text-[20px] font-bold">Shortcuts</Text>

      <Animated.View entering={FadeInDown.delay(200).springify()} className="flex flex-row gap-5 p-3 ">

      
   

    <View>
    <View className="border-[2px] border-neutral-800 p-[6px] rounded-full">
     <View className="border-[1px] border-[#ff4500]/20 p-[6px] rounded-full">
     <TouchableOpacity className="justify-end   items-center bg-neutral-800/30 border-[1px] border-[#ff4500] p-2 rounded-full">
     <MaterialCommunityIcons name="face-man"  size={hp(3)} color='#ff4500'/>
      </TouchableOpacity>
      
     </View>
     </View>
     <Text className="text-neutral-400 text-center pt-2 ">Near me</Text>
     </View>

     <View>
     <TouchableOpacity className="justify-end   items-center bg-[#d438f7]/20 border-2 border-[#d438f7]/20 p-5 rounded-full">
     <MaterialIcons name="network-cell"  size={hp(3)} color='#d438f7'/>
      </TouchableOpacity>
      <Text className="text-neutral-400 text-center pt-3 ">Buy airtime</Text>
     </View>
     <View>
     <TouchableOpacity className="justify-end   items-center bg-[#404cf1]/20 border-2 border-[#404cf1]/20 p-5 rounded-full">
     <MaterialIcons name="network-wifi"  size={hp(3)} color='#404cf1'/>
      </TouchableOpacity>
      <Text className="text-neutral-400 text-center pt-3 ">Buy data</Text>
     </View>  
      </Animated.View>
    </View>
  )
}