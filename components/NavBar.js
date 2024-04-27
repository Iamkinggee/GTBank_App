// import { View, Text, TouchableOpacity, Pressable } from 'react-native'
// import React from 'react'
// import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Foundation from 'react-native-vector-icons/Foundation';
// import { MaterialIcons } from '@expo/vector-icons';
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
// import { useRouter } from 'expo-router';


// export default function NavBar() {
//   const router = useRouter();
//   return (
//     <Animated.View entering={FadeInDown.delay(100).springify()}  className="bottom-0  bg-neutral-800 h-[65px] justify-center pb-2 py-2 m-auto w-full flex flex-row gap-5 items-center mx-auto">
   
//       <Pressable  
//       className="justify-end   items-center ">
//       <Foundation name="home"  size={hp(4)} color={'gray'} />
//       <Text className="text-neutral-400 text-center  ">Home</Text>
//       </Pressable>

//       <Pressable
      
//       style={({ pressed }) => ({
//         backgroundColor: pressed ? 'gray' : 'red',  
//       })}
//       onPress={()=> router.push('Products')}
//       className="justify-end items-center ">
//       <AntDesign name="CodeSandbox"  size={hp(4)} color={'gray'} />
//       <Text className="text-neutral-400 text-center ">Products</Text>
//       </Pressable >


//       <Pressable  
//       className="justify-end items-center ">
//       <MaterialIcons  name="payments"  size={hp(4)} color={'gray'} />
//       <Text className="text-neutral-400 text-center ">Payment</Text>
//       </Pressable>


//       <Pressable
//       onPress={()=> router.push('Transfer')}
//       className="justify-end items-center ">
//       <FontAwesome6 name="circle-chevron-right"  size={hp(2)} color={'black'} style={{backgroundColor:'gray',
//       padding: 5,
//       borderRadius: 50    
//      }}/>

//       <Text className="text-neutral-400 text-center  ">Transfer</Text>
//       </Pressable>
       


//       <Pressable
      
//       className="justify-end items-center "
//       onPress={()=> router.push('Investment')}
//       >
//       <MaterialIcons  name="leaderboard"  size={hp(3)} color={'black'} style={{backgroundColor:'gray',
    
//        }}/>
       
//       <Text className="text-neutral-400 text-center  ">Investment</Text>
//       </Pressable>
   
//     </Animated.View>
//   )
// }



