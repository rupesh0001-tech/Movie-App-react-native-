import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

const Navbar = () => {
  return (
    <View className=' h-50 w-full px-10 py-6 bg-[#061E29] border-b border-white  flex flex-row items-center justify-between   '>
      <Text className=' text-white text-md font-bold '> Movie Dekho </Text>
      <View className=' flex flex-row gap-2 justify-center items-center'>
        <FontAwesome name="search" size={24} color="white" />
      </View>
    </View>
  )
}

export default Navbar

