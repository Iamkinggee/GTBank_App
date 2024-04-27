import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from './Screen/Home'
import Products from './Screen/Products'
import Transfer from './Screen/Transfer'
import Investment from './Screen/Investment'
import Payment from './Screen/Payment'
import Foundation from 'react-native-vector-icons/Foundation';
import { MaterialIcons } from '@expo/vector-icons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { StatusBar } from 'expo-status-bar'



const   Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();




function HomeScreen(){
    
    return(
        
        <Tab.Navigator
       
       screenOptions={{
        headerShown:false,
        tabBarShowLabel:true,
        tabBarStyle: {backgroundColor: 'rgb(38 35 38 )', borderColor:'#1b1b2b', },
        tabBarActiveTintColor:'#ff4500',
        tabBarInactiveTintColor: 'gray',
       
       }}


       tabBarOptions={{
          labelStyle:{
          fontSize:12,
          fontWeight:'bold',
          paddingBottom: 5,
          
       
         
        }
        }}
        
        >
       <Tab.Screen
             style={{backgroundColor:'red'}}
             name="Home"
           
            component={Home}
            options={{title: 'Home',

                 
            
            tabBarIcon:({size,color, focused})=> (
                <Foundation name="home"  size={hp(3)}  color={focused ? '#ff4500': 'gray'} 
                style={{
                    
                    marginTop:2   
                 }}
              />
            )
        }}         
         />

                  <Tab.Screen
                        name="Products"
                        component={Products}
                        options={{title: 'Products',
                        tabBarIcon:({size,color,focused})=> (
                            <FontAwesome5 name="dice-d6"  size={hp(3)}  color={focused ? '#ff4500': 'gray'}  style={{
                   
                                marginTop:0  
                             }}/>
                        )
                    }}
                        
            /> 


<Tab.Screen
            name="Payment"
            component={Payment}
            options={{title: 'Payment',
            tabBarIcon:({size,color,focused})=> (
                <MaterialIcons  name="payments"  size={hp(3)}  color={focused ? '#ff4500': 'gray'}  
                 style={{
                   
                    marginTop:2   
                 }}/>
            )
        }}
            
/>

<Tab.Screen
            name="Transfer"
            component={Transfer}
            options={{title: 'Transfer',
            tabBarIcon:({size,color,focused})=> (
                <FontAwesome6 name="circle-chevron-right"  size={hp(3)} color={focused ? '#ff4500': 'gray'} 
                style={{
                
                // padding: 3,
                borderRadius: 10,
                marginTop:4 
              }}/>
            )
        }}
            
/>
            <Tab.Screen
            name="Investment"
            component={Investment}
            options={{title: 'Investment',
            tabBarIcon:({size,color,focused})=> (
                <FontAwesome5 name="poll"  size={hp(3)} color={focused ? '#ff4500': 'gray'} 
                style={{
                paddingTop: 3,
                paddingRight: 3,
                
    
            }}/>
            )
        }}
            
/> 
        </Tab.Navigator>
    )
}



export default function Auth(props) {
  return (
    <NavigationContainer  >
        
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name="Home" component={HomeScreen}  />
           
        </Stack.Navigator>
       
    </NavigationContainer>
  )
}