import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerShown: false, title: "title" }} />
      <Tabs.Screen name="saved" options={{ headerShown: false, title: "Saved" }} />
      <Tabs.Screen name="search" options={{ headerShown: false, title: "Search" }} />
      <Tabs.Screen name="profile" options={{ headerShown: false, title: "Profile" }} />
    </Tabs>
  )
}

export default layout