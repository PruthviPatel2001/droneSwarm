import * as yup from "yup";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Formik } from "formik";
import React from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required!"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required!"),
});

const Login = () => {
  const navigator = useNavigation();

  return (
    <View className=" bg-[#17233B] flex-1">
      <SafeAreaView>
        <View className="mt-8 p-4">
          <Text
            className="text-white text-3xl text-center rounded-tl-2xl rounded-tr-2xl"
            style={{ fontFamily: "RobotoBold" }}
          >
            StrandAid
          </Text>
        </View>
        <View className="p-4 bg-white h-full mt-32 rounded-tl-3xl rounded-tr-3xl ">
          <Text
            className="text-[#17233B] mt-2 text-3xl text-center rounded-tl-2xl rounded-tr-2xl"
            style={{ fontFamily: "RobotoBold" }}
          >
            Login
          </Text>

          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              console.log(values);
              try {
                const res = axios.post(
                  "https://strandaid.azurewebsites.net/auth",
                  values
                );
                console.log(res);
                 res && navigator.navigate("home");
              } catch (err) {
                console.log(err);
              }
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
            }) => (
              <>
                <View className="d-flex p-4 mt-10  ">
                  <View className="mt-2">
                    <TextInput
                      name="email"
                      placeholder="Email Address"
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      keyboardType="email-address"
                      className="h-12 w-full bg-[#F3F5F7] rounded-xl px-4"
                    />

                    {errors.email && (
                      <Text className="mt-1 px-2 text-sm text-red-500">
                        {errors.email}
                      </Text>
                    )}
                  </View>

                  <View className="mt-6">
                    <TextInput
                      name="password"
                      placeholder="Password"
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                      className="h-12 w-full bg-[#F3F5F7] rounded-xl px-4"
                      secureTextEntry
                    />

                    {errors.password && (
                      <Text className="mt-1 px-2 text-sm text-red-500">
                        {errors.password}
                      </Text>
                    )}
                  </View>
                </View>

                <View className="d-flex justify-center items-center mt-4 ">
                  <TouchableOpacity
                    className="  w-2/4 p-3 d-flex justify-center items-center rounded-3xl"
                    onPress={() => navigator.navigate("")}
                  >
                    <Text className="text-[#17233B] text-md">
                      FORGOT PASSWORD
                    </Text>
                  </TouchableOpacity>
                </View>

                <View className="d-flex justify-center items-center mt-2 ">
                  <TouchableOpacity
                    className=" bg-[#17233B] w-2/4 p-3 d-flex justify-center items-center rounded-3xl"
                    // onPress={() => navigator.navigate("home")}
                    onPress={handleSubmit}
                    // title="LOGIN"
                    disabled={!isValid}
                  >
                    <Text className="text-white text-md">Login</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Login;
