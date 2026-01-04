import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      className=" h-screen flex justify-center items-center"
    >
      <Text className=" text-5xl font-bold text-accent  "> Wellcome !</Text>
      <Link href="/onboarding"> Go to Onboarding </Link>
      <Link href="/movie/109813028"> Go to Login </Link>
    </View>
  );
}
