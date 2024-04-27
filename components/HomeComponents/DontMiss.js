
import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function DontMiss() {
  return (
    <View  className="flex flex-1 mt-9-   bg-neutral-800 p-2 ">
     <View className="flex-row space-x-[120px] ">
          <Text className="text-white pb-2 pt-8 pl-2  text-[20px] font-semibold">
            Don't Miss
            </Text>
     </View>


      <View    className=" bg-neutral-800  border border-neutral-700 rounded-[10px]  ">
          
            <Image 
                                source={require('../../assets/Images/bank1.png')}
                                style={{height: hp(15), width: wp(93,), padding:20,
                                
                                justifyContent:'center',
                              borderRadius: 4,
                              borderBottomLeftRadius: 0, 
                              borderBottomRightRadius: 0 
                            }}
                               
                           />
           <View className="flex-row space-x-5">
           <Text className="text-white p-3 ">Put your money to work for you and earn more!</Text>
            <Entypo name="chevron-right"  size={hp(3)} color='#ff4500'
            style={{
             paddingTop:12
          }}/>
           </View>
      </View>

      <View  className=" bg-neutral-800  border border-neutral-700 rounded-[10px] mt-5  ">
          
            <Image 
                                source={require('../../assets/Images/bank2.jpg')}
                                style={{height: hp(15), width: wp(93,), padding:20,
                                
                                justifyContent:'center',
                              borderRadius: 4,
                              borderBottomLeftRadius: 0, 
                              borderBottomRightRadius: 0 
                            }}
                               
                           />
          <View className="flex-row  space-x-3">
          <Text className="text-white p-3 text-[12px] ">Design Your Future With a Retirement Plan. Discover Our Pension Products.</Text>
            <Entypo name="chevron-right"  size={hp(3)} color='#ff4500'
            style={{
             paddingTop:16
          }}/>
          </View>
      </View>




        <View className=" mt-7 mb-7 border  border-neutral-700  rounded flex-row">
          <View>         
          <Image 
                                source={require('../../assets/Images/gtbank1.png')}
                                style={{height: hp(3), width: wp(10,),marginTop:14, marginLeft:1
                            }}
                               
                           />  
          </View>
      <Text className="text-white p-3 pr-5  roundedfont-light text-[10px] ">
            Banking services powered by Guaranty Trust Bank Ltd, Licenced by the central Bank of Nigeria.</Text>
        </View>
      
    </View>
  )
}