import {
  Button,
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import React from "react";
import UserAvatar from "react-native-user-avatar";
import icons from "../constants/icons";
import { useNavigation } from "@react-navigation/native";

const ProfileModal = () => {
  const navigator = useNavigation();
  const image =
    "https://image.shutterstock.com/mosaic_250/2780032/1854697390/stock-photo-head-shot-young-attractive-businessman-in-glasses-standing-in-modern-office-pose-for-camera-1854697390.jpg";

  return (
    <SafeAreaView style={styles.container}>
      <View className="flex flex-col items-center">
        <Text className="text-2xl mt-12">Profile</Text>
        <TouchableOpacity
          className="mt-4"
          onPress={() => navigator.navigate("profilemodel")}
        >
          <UserAvatar size={100} name="Avishay Bar" src={image} />
        </TouchableOpacity>
      </View>

      <View className="mx-4 text-left mt-8">
        <View className="mt-3">
          <Text className="text-sm text-gray-500">Name</Text>

          <View className="flex flex-row justify-between border-solid border-b-2 border-gray-200">
            <Text className="text-xl">Dinesh Shah</Text>
            <Image
              source={icons.edit}
              style={{
                width: 20,
                height: 20,
              }}
              resizeMode="contain"
            />
          </View>
        </View>

        <View className="mt-3">
          <Text className="text-sm text-gray-500 mt-5">Email</Text>
          <View className="border-solid border-b-2 border-gray-200">
            <Text className="text-xl ">dineshShah@gmail.com</Text>
          </View>
        </View>

        <View className="mt-3">
          <Text className="text-sm text-gray-500 mt-5">Date of Birth</Text>
          <View className="flex flex-row justify-between border-solid border-b-2 border-gray-200">
            <Text className="text-xl">10.08.1983</Text>
            <Image
              source={icons.edit}
              style={{
                width: 20,
                height: 20,
              }}
              resizeMode="contain"
            />
          </View>
        </View>

        <View className="mt-3">
          <Text className="text-sm text-gray-500 mt-4">Account Type</Text>
          <View className="border-solid border-b-2 border-gray-200">
            <Text className="text-xl border-solid border-b-2 border-gray-200">
              Moderator
            </Text>
          </View>
        </View>

        <View className="mt-3">
          <Text className="text-sm text-gray-500 mt-4">Fast Login</Text>
          <View className="flex flex-row justify-between border-solid border-b-2 border-gray-200">
            <Text className="text-xl">Remember</Text>
            <Image
              source={icons.toggle}
              style={{
                width: 30,
                height: 30,
              }}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>

      <View className=" mt-10 flex justify-center items-center">
        <View className="flex flex-row items-center mt-6">
          <TouchableOpacity className="bg-[#17233B] p-4 rounded-xl">
            <Text className="text-xl mr-2 text-white ">Logout</Text>
          </TouchableOpacity>
       
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileModal;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    height: Dimensions.get("screen").height,
    backgroundColor: "#ffffff",
  },
});
