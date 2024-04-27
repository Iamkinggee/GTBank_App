import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome6,MaterialIcons } from '@expo/vector-icons'
import { FlatList, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const DATA = [
  { id: '1', title: 'Buy Airtime', iconName: 'phone', color:'yellow'},
  { id: '2', title: 'Buy Data', iconName: 'wifi', color:'skyblue'},
  { id: '3', title: 'Cable TV', iconName: 'tv', color:'red'},
  { id: '4', title: 'Capital Market & Investment', iconName: 'bar-chart', color:'orange'},
  { id: '5', title: 'Distributors & Agent Payments', iconName: 'map', color:'blue'},
  { id: '6', title: 'Electricity & Water', iconName: 'bolt', color:'teal'},
  { id: '7', title: 'Estate & Associations', iconName: 'house', color:'yellow'},
  { id: '8', title: 'Event, Entertainment & Ticketing', iconName: 'microphone', color:'green'},
  { id: '9', title: 'Infotechs & Other Services', iconName: 'info', color:'grey'},
  { id: '10', title: 'Financial institutions', iconName: 'dollar-sign', color:'green'},
  { id: '11', title: 'Government Taxes & levies', iconName: 'handshake', color:'red'},
  { id: '12', title: 'Sports & Games', iconName: 'basketball', color:'cyan'},
  { id: '13', title: 'Utilities', iconName: 'circle-nodes', color:'orange'},
  { id: '14', title: 'Remita', iconName: 'spinner', color:'blue'},
  { id: '15', title: 'Toll Fees- LCC', iconName: 'car', color:'red'},
  { id: '16', title: 'Podcasts', iconName: 'podcast', color:'orange'},
  { id: '17', title: 'visa Fee payment', iconName: 'plane', color:'blue'},
  { id: '18', title: 'Schools & professional Bodies', iconName: 'book-open', color:'purple'},

];

const Item = ({title, iconName,color})=>(
  <TouchableOpacity className="flex-row  p-2 gap-5 pt-6 ">

{/* // <TouchableOpacity className="justify-end   items-center bg-[#d438f7]/20 border-2 border-[#d438f7]/20 p-5 rounded-full"> */}
     <FontAwesome6 name={iconName}  size={hp(3)}  color={color} />
    <Text className="text-white font-light">{title}</Text>
    <View className=" ">
    {/* <FontAwesome6  name='chevron-right' size={10} color ="white" style={{ paddingTop: 6, }} /> */}
    <FontAwesome6  name='chevron-right' size={10} color ="white"  style={{
          
        }} />
    </View>
  </TouchableOpacity>
)

export default function Payment() {
  const renderItem = ({item}) =>(
    <Item title={item.title} iconName={item.iconName} color={item.color}/>
  )
  return (
    <View className="bg-neutral-900 flex-1">
      <Text className="text-[25px] font-semibold  pl-3 mt-10 text-white">Payments</Text>
    
    <FlatList
     data={DATA}
     renderItem={renderItem}
     keyExtractor={item=> item.id}
    />
     </View>
  )
}