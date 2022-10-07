import {
  Button,
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
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
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 120,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="ml-4 ">
          <TouchableOpacity onPress={() => navigator.goBack()}>
            <Image
              source={icons.leftarrow}
              style={{
                height: 28,
                width: 28,
              }}
            />
          </TouchableOpacity>
        </View>
        <View className="flex flex-col items-center">
          <Text className="text-2xl mt-4">Profile</Text>
          <TouchableOpacity
            className="mt-4"
            onPress={() => navigator.navigate("profilemodel")}
          >
            <UserAvatar size={100} name="Dinesh Shah" src={image} />
          </TouchableOpacity>
        </View>
        <View className="flex justify-end items-end pr-4 ">
          <View className="flex flex-row items-center mt-2">
            <TouchableOpacity className="bg-[#17233B] p-4 rounded-xl">
              <Text className="text-base text-white ">Edit</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Formik
          initialValues={{
            name: "Dinesh Shah",
            email: "dineshShah@gmail.com",
            dob: "10.08.1983",
            accountType: "Moderator",
            fastLogin: "Rember",
          }}
          onSubmit={(values) => {
            console.log(JSON.stringify(values));
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <>
              <View className="mx-4 text-left mt-6 ">
                <View className="mt-3">
                  <Text className="text-sm text-gray-500">Name</Text>
                  <View className="pb-1 mt-1 flex flex-row justify-center items-center w-full border-solid border-b-2 border-gray-200 text-xl">
                    <TextInput
                      className="flex flex-row w-full text-xl ms-4"
                      value={values.name}
                      onChangeText={handleChange("name")}
                      onBlur={handleBlur("name")}
                    />
                  </View>
                </View>

                <View className="mt-3">
                  <Text className="text-sm text-gray-500 mt-4">Email</Text>
                  <View className="pb-1 mt-1 flex flex-row justify-center items-center w-full border-solid border-b-2 border-gray-200">
                    <TextInput
                      className="flex flex-row w-full text-xl ms-4"
                      value={values.email}
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                    />
                  </View>
                </View>
                <View className="mt-3">
                  <Text className="text-sm text-gray-500 mt-4">
                    Date of Birth
                  </Text>
                  <View className="pb-1 mt-1 flex flex-row justify-center items-center w-full border-solid border-b-2 border-gray-200">
                    <TextInput
                      className="flex flex-row w-full text-xl ms-4"
                      value={values.dob}
                      onChangeText={handleChange("dob")}
                      onBlur={handleBlur("dob")}
                    />
                  </View>
                </View>
                <View className="mt-3">
                  <Text className="text-sm text-gray-500 mt-4">
                    Account Type
                  </Text>
                  <View className="border-b-2 border-gray-200 pb-1 mt-1">
                    <Text className="text-xl border-solid ">Moderator</Text>
                  </View>
                </View>

                <View className="mt-3">
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
              </View>

              <View className="mx-4 text-center mt-10 flex flex-row justify-between items-center">
                <View>
                  <TouchableOpacity className="bg-[#17233B] p-4 rounded-xl">
                    <Text className="text-md mr-2 text-white ">
                      Save Profile
                    </Text>
                  </TouchableOpacity>
                </View>

                <View className="flex flex-row items-center mt-2">
                  <TouchableOpacity className="bg-[#17233B] p-4 rounded-xl">
                    <Text className="text-md text-white ">Logout</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
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
