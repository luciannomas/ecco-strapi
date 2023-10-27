import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {

  const navigation = useNavigation();

  useLayoutEffect( ()=> {
    navigation.setOptions({
      headerShown: false
    })
  }, [])


  return (
    
      <Text className="text-red-500 mt-10">
        {/* header */}
        <View className="flex-row pb-3  mx-7 space-x-2">
          <Image
            sourche = {{ uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png"}}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full "
          />
          <View>
            <Text className ="font-bold text-gray-400 text-xs">
              Delivery now
            </Text>
            <Text className="font-bold text-xl">
              Current Location
            </Text>
          </View>

        </View>
      </Text>
    
  )
}