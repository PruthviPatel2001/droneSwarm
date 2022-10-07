import {
  Button,
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Formik } from "formik";
import React from "react";
import UserAvatar from "react-native-user-avatar";
import icons from "../constants/icons";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigator = useNavigation();
  const image =
  "https://image.shutterstock.com/mosaic_250/2780032/1854697390/stock-photo-head-shot-young-attractive-businessman-in-glasses-standing-in-modern-office-pose-for-camera-1854697390.jpg";


  return (
    <SafeAreaView style={styles.container}>
      <View className="flex flex-col items-center">
        <Text className="text-2xl mt-4">Profile</Text>
        <TouchableOpacity
          className="mt-4"
          onPress={() => navigator.navigate("profilemodel")}
        >
          <UserAvatar size={100} name="Avishay Bar" src={image} />
        </TouchableOpacity>
      </View>
      <Formik
        initialValues={{
          name: "",
          email: "",
          dob: "",
          remember: 0,
        }}
        onSubmit={(values) => {
          console.log(JSON.stringify(values));
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <View className="mx-4 text-left mt-6">
              <Text className="text-sm text-gray-500">Name</Text>
              <View className="flex flex-row justify-center items-center w-full border-solid border-b-2 border-gray-200 text-xl">
                <TextInput
                  className="flex flex-row w-full text-xl ms-4"
                  value={values.name}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                />
                <Image
                  source={icons.edit}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                  resizeMode="contain"
                />
              </View>
              <Text className="text-sm text-gray-500 mt-4">Email</Text>
              <View className="flex flex-row justify-center items-center w-full border-solid border-b-2 border-gray-200">
                <TextInput
                  className="text-xl ms-4"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                />
              </View>
              <Text className="text-sm text-gray-500 mt-4">Date of Birth</Text>
              <View className="flex flex-row justify-center items-center w-full border-solid border-b-2 border-gray-200">
                <TextInput
                  className="flex flex-row w-full text-xl ms-4"
                  value={values.dob}
                  onChangeText={handleChange("dob")}
                  onBlur={handleBlur("dob")}
                />
                <Image
                  source={icons.edit}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                  resizeMode="contain"
                />
              </View>
              <Text className="text-sm text-gray-500 mt-4">Account Type</Text>
              <Text className="text-xl border-solid border-b-2 border-gray-200">
                Moderator
              </Text>
              <Text className="text-sm text-gray-500 mt-4">Fast Login</Text>
              <View className="flex flex-row justify-between border-solid border-b-2 border-gray-200">
                <Text className="text-xl">Remember</Text>
                <Image
                  source={icons.toggle}
                  style={{
                    width: 35,
                    height: 35,
                  }}
                  resizeMode="contain"
                />
              </View>
            </View>
            <View className="mx-4 text-center mt-10 flex items-center">
              <Button
                title="Save Profile"
                onPress={() => navigator.navigate("Home")}
                color="rgb(15,23,42)"
              />
              <View className="flex flex-row items-center mt-6">
                <Text className="text-xl mr-2">Logout</Text>
                <Image
                  source={icons.logout}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                  resizeMode="contain"
                />
              </View>
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    height: Dimensions.get("screen").height,
    backgroundColor: "#ffffff",
  },
});
