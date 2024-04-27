import { View, Text,Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';

export default function SplashScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-neutral-800" >
     <Animated.View entering={FadeInUp.delay(100).springify()}>
        
                            <Image 
                              source={require('../../assets/Images/gtbank1.png')}
                              style={{height: hp(15), width: wp(50,), 
                              
                              justifyContent:'center',
                            borderRadius: 4,

                          borderBottomLeftRadius: 0, 
                          borderBottomRightRadius: 0 }}
                             
                           />
     </Animated.View>
    </View>
  )
}