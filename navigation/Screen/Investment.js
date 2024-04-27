import { View, Text, Image } from 'react-native'
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Investment() {
  return (
    <>
    <Animated.View entering={FadeInUp.delay(100).springify()} className="justify-center  flex-1 bg-neutral-900">
         {/* rounded-[10px] mt-3 justify-center items-center   */}

              <View className=" mt-3 justify-center items-center  ">
                    <Image 
                          source={require('../../assets/Images/work1.png')}
                          style={{height: hp(40), width: wp(90,),                
                          justifyContent:'center',
                          borderRadius: 4,
                           borderBottomLeftRadius: 0, 
                           borderBottomRightRadius: 0 ,
                            justifyContent:'center'
                        }}                            
                          />

                </View>



                <Animated.View entering={FadeInDown.delay(200).springify()}>
                 <Text  className="pt-10 font-semibold text-[20px] text-center text-white ">Coming soon</Text>
                 <Text className="text-center text-[12px] py-2 text-white px-5">We are trying very hard to complete it as soon as possible, but you can always use our other cool features.</Text>
                </Animated.View>
    </Animated.View>
    </>
  )
}

