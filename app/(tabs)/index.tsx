import Navbar from "@/components/Home/Navbar";
import { Link, Tabs } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className=" flex flex-col items-center pt-10 bg-[#061E29] h-screen  ">
     <Navbar />
      
    </View>
  );
}
