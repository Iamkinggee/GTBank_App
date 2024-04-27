
import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/FontAwesome6';
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';


export default function TransactionHistory() {
  return (
    <Animated.View entering={FadeInDown.delay(300).springify()} className="flex mt-9- bg-neutral-800 p-2">
     <View className="flex-row space-x-[100px] pb-3 ">
          <Text className="text-white p-2  text-[20px] font-semibold">
            Transaction History
            </Text>

         {/* <Text className="text-neutral-400 pt-3">See more</Text> */}


         <TouchableOpacity className="justify-end  flex-row items-center space-x-2">
      <Text className="text-neutral-400 text-center  ">See more</Text>
      <Entypo name="chevron-right"  size={hp(3)} color='grey' className="text-neutral-400"/>
      </TouchableOpacity>





     </View>
      <View  className=" bg-neutral-800  border border-neutral-700 rounded p-5">
      <Text className="text-neutral-400">10 March</Text>


 <View className="flex flex-row space-x-10 justify-center p-5">

 <View className="flex-row space-x-6">

  <View className="bg-neutral-800 p-3 rounded-full border-2 border-neutral-700">
    <View className="bg-[#ff4500] rounded-full p-1">
    <Ionicons name="angles-right"  size={hp(2)} color={'black'} />
    </View>
  </View>
  <View>
    <Text className="text-white pt-2 ">Godsent Oko-Ose</Text>
    <Text className="text-neutral-500 text-[12px] ">Transfer</Text>
  </View> 
  </View>


  <View>
    <Text className="text-white font-semibold text-[15px] pt-2">- N 824,343</Text>
    <Text className="text-neutral-500 text-[12px] ">From *45674</Text>
  </View>
 </View>

       
      </View>
    </Animated.View>
  )
}