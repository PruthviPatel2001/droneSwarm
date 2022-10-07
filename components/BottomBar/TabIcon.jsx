import {ClipboardDocumentListIcon, HomeIcon, UserCircleIcon, VideoCameraIcon} from "react-native-heroicons/outline"
import { Image, Text, View } from "react-native";

import React from "react";

const TabIcon = ({ focused, icon, label }) => {


  return (
    <View className="flex justify-center items-center ">
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 25,
          height: 25,
          tintColor: focused ? "#17233B" : "#BDBDBD",
        }}
      />
      <Text
        style={{
          color:  "#17233B" ,
        }}
        className="mt-1"
      >
        {label}
      </Text>
    </View>
  );
};

export default TabIcon;
