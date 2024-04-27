import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function Funding() {
  return (
    <ScrollView className="pl-2 pt-6 gap-2  "
     horizontal={true} 
     showsHorizontalScrollIndicator={false}>

 
        
            <TouchableOpacity className=" p-1  w-[160px]   flex-row    border-[#ff4500] border-[0.5px] gap-2 font-bold rounded-full  bg-orange-900/30  " >

            <Ionicons name="circle-plus"  size={hp(3)} color='#ff4500' />
            <Text className="text-[#ff4500] font-bold  text-[16px] justify-center  items-center text-center pb-2  ">
                Fund account
            </Text>
            </TouchableOpacity>
     
      
        <TouchableOpacity className="w-[120px] flex-row   border-[#ff4500] border-[0.5px] justify-center items-center gap-2 font-bold rounded-full  text-center bg-orange-900/30   " >

        <Ionicons name="angles-right"  size={hp(3)} color={'#ff4500'} />
        <Text className="text-[#ff4500] font-bold text-[16px]  m-auto  text-center  justify-center items-center pt-1">
            Transfer
        </Text> 
        </TouchableOpacity>
      
        <TouchableOpacity className="w-[120px] flex-row  border-[#ff4500] border-[0.5px] gap-2 font-bold rounded-full  text-center  px-2 bg-orange-900/30  " >

        <FontAwesome name="refresh"  size={hp(3)} color={'#ff4500'} />
        <Text className="text-[#ff4500] font-bold text-center  m-auto p-1  ">
            FX Sales
        </Text>
        </TouchableOpacity>
      
        <TouchableOpacity className="w-40 flex-row  border-[#ff4500] border-[0.5px] gap-2 font-bold rounded-full  text-center px-2 bg-orange-900/30  " >

        <AntDesign name="barchart"  size={hp(3)} color={'#ff4500'}  />
        <Text className="text-[#ff4500] font-bold text-center  m-auto pt-1  ">
            Account details
        </Text>
        </TouchableOpacity>















    </ScrollView >
  )
}