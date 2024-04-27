import { View, Text, Pressable,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRouter } from '@react-navigation/native';


export default function Transfer() {
  const[clicked, setClicked] = useState(false);
  const handlePress = ()=>{
    setClicked(!clicked);
  }

  return (
    // <View className="bg-neutral-900 flex-1">
    <View className=" flex-1 bg-neutral-900">
      <Text className="font-semibold text-[30px] mt-10 pl-2 text-white">Transfers</Text>

 
      <TextInput
      className=" w-[370px] text-[15px]  mx-auto p-2 mt-3 rounded border-[1px] text-white border-neutral-500/40"
      placeholder='Name, phone or account number...'
      placeholderTextColor="gray"
      style={[
        'text-white',
      
      ]}
      />




      <View className="pl-2">
        <Text className="text-[20px] font-semibold mt-8 text-white">Create new</Text>
      </View>

      <View className="">
        <Pressable  className="border-[1px] border-neutral-500/40 p-3  rounded flex-row w-[370px] mx-auto mt-3">
        <FontAwesome name="user"  color={'#ff4500'}  style={{paddingTop: 0}} size={hp(3)}   />
          <Text className="font- pl-3 text-white">Account transfer</Text>
          <Entypo name="chevron-right"  size={hp(3)} color='gray'
          style={{
           paddingTop:0,
           marginLeft:180
        }}/>
        </Pressable>
        <Pressable className="border-[1px] border-neutral-500/40 p-3  rounded flex-row w-[370px] mx-auto mt-3">
        <FontAwesome5 name="globe"  color={'#ff4500'}  style={{paddingTop: 0}} size={hp(3)}   />
          <Text className="font- pl-3 text-white">FX transfer to other banks</Text>
          <Entypo name="chevron-right"  size={hp(3)} color='gray'
          style={{
           paddingTop:0,
           marginLeft:120
        }}/>
        </Pressable>
        <Pressable className="border-[1px] border-neutral-500/40 p-3  rounded flex-row w-[370px] mx-auto mt-3">
        <FontAwesome name="refresh"  color={'#ff4500'}  style={{paddingTop: 0}} size={hp(3)}   />
          <Text className="font- pl-3 text-white">FX Sales</Text>
          <Entypo name="chevron-right"  size={hp(3)} color='gray'
          style={{
           paddingTop:0,
           marginLeft:230
        }}/>
        </Pressable>
      </View>


      <View>
        <Text className="text-white mt-8 pl-2 font-semibold text-[20px] ">Beneficiaries</Text>
      </View>

      <View className="pt-3 pl-3 flex-row gap-3">
        <TouchableOpacity
        
        className="border-[1px] w-10 rounded-2xl border-[#ff4500] bg-[#ff4500]/10 p-2">
          <Text className="text-[#ff4500]">All</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={[
          clicked ? 'bg-white' : 'bg-yellow-400',
       
        ]}
        onPress={handlePress}
        className="border-[1px]  rounded-2xl  p-2">

          <Text className="text-white">saved</Text>
        </TouchableOpacity>

        <TouchableOpacity className="border-[1px]  rounded-2xl  p-2">
          <Text className="text-white">Contacts</Text>
        </TouchableOpacity>

        <TouchableOpacity className="border-[1px] text-[10px] rounded-2xl  p-2">
          <Text className="text-white">FX transfers</Text>
        </TouchableOpacity>


      </View>
    </View>
  )
}