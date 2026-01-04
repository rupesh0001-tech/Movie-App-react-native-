import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

const Tab = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarStyle: { backgroundColor: "#061E29", borderRadius: 50 , position: "absolute", bottom : 35 },
        tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: () => <FontAwesome name="home" size={24} color="white" />,
          tabBarIconStyle: {},
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome name="heart" size={24} color="white" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome name="search" size={24} color="white" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome name="user" size={24} color="white" />,
        }}
      />
    </Tabs>
  );
};

export default Tab;
