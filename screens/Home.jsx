import { SafeAreaView, Text, View } from "react-native";

import React from "react";

const Home = () => {
  return (
    <View className=" bg-[#17233B] flex-1">
      <SafeAreaView>
        <View className="flex justify-between flex-row p-4">
          <Text
            className="text-white text-3xl"
            style={{ fontFamily: "RobotoBold" }}
          >
            StrandAID
          </Text>
          <Text>hello</Text>
        </View>
        <View className="mt-4">
          <Text>
            Hello,
          </Text>
          <Text>
            Admin: {"<Nzame />"}
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
