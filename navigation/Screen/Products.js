import { View, Text,Image } from 'react-native'
import React from 'react'
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';
import Entypo from 'react-native-vector-icons/Entypo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Products() {
  return (
    <View className="bg-neutral-900 flex-1">
      <Text className="font-semibold text-[30px] mt-10 pl-2 text-white">Products</Text>

      <View>
        <Text className="pl-2 font-semibold text-[20px] pt-7 text-white">Loans</Text>
      </View>



<Animated.View entering={FadeInUp.delay(100).springify()}  className="rounded-[10px] mt-3 justify-center items-center    ">
          <Image 
                              source={require('../../assets/Images/bank3.jpg')}
                              style={{height: hp(15), width: wp(98,), 
                              
                              justifyContent:'center',
                            borderRadius: 4,

                          borderBottomLeftRadius: 0, 
                          borderBottomRightRadius: 0 }}
                             
                         />
        <View className=" bg-neutral-800  px-[5.5px] rounded-b-[10px] pb-5">
        <Text className="text-white py-4 text-[12px] text-center   w-[375px] ">Click here to apply for QuickCredit and salary Advance.</Text>


        <TouchableOpacity className="flex-row  bg-orange-900/30 p-2 w-[340px]  border-[#ff4500] border-[0.5px] justify-center items-center m-auto">
         <AntDesign name="plus"  size={hp(3)} color={'#ff4500'} style={{paddingRight:5 }} />
          <Text className=" text-[#ff4500]  font-semibold "> Apply for loan</Text>
        </TouchableOpacity>
        </View>
    </Animated.View>


 
 
    <View>
        <Text className="pl-2 font-semibold text-[20px] pt-7 text-white">More Products</Text>
      </View>
<Animated.View entering={FadeInUp.delay(200).springify()} className="   rounded-[10px] mt-3 justify-center items-center    ">
          <Image 
                              source={require('../../assets/Images/bank2.jpg')}
                              style={{height: hp(15), width: wp(98,), 
                              
                              justifyContent:'center',
                            borderRadius: 4,

                          borderBottomLeftRadius: 0, 
                          borderBottomRightRadius: 0 }}
                             
                         />
        <View className="flex-row  bg-neutral-800  px-[5.5px] rounded-b-[10px] ">
        <Text className="text-white py-4 text-[12px] ">Design Your Future With a Retirement Plan. Discover Our Pension Products.</Text>
          <Entypo name="chevron-right"  size={hp(3)} color='#ff4500'
          style={{
           paddingTop:16
        }}/>
        </View>
    </Animated.View>







      
    </View>
  )
}