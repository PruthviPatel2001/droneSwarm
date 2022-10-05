import { Image, Text, View } from "react-native";

import React from "react";
import icons from "../../constants/icons";

const DroneDetails = ({ data }) => {
  return (
    <View className="mt-10">
      <View className="grid grid-cols-2 gap-3">
      
        <View className="col-span-2 bg-[#F5F5F533] bg-opacity-20 p-3">
          <View className="flex justify-between items-center flex-row">
            <Text className="text-white">
              DJI Mavic Air Drone
            </Text>
            <Text className="text-white ml-4">3200 mAh</Text>
          </View>

          <View className="flex flex-row">
            <Image
              source={icons.battery}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor:"white"
              }}
            />
            <Text className="text-white">48% Battery</Text>
          </View>

          <View className="flex flex-row">
            <Image
              source={icons.compass}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor:"white"

              }}
            />
            <Text className="text-white">250m Range</Text>
          </View>

          <View className="flex flex-row">
            <Image
              source={icons.wallclock}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor:"white"

              }}
            />
            <Text className="text-white">20 Mins Flying Left</Text>
          </View>
        </View>

        <View className="bg-[#F5F5F533] bg-opacity-20 p-3">
          <View className=" flex flex-row">
            <Image
              source={icons.wallclock}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor:"white"

              }}
            />
            <Text className="text-white ml-4">Camera Type</Text>
          </View>
          <View className=" flex flex-row">
            <Text className="text-white ">VQ</Text>
            <Text className="text-white ml-4 ">1080p</Text>
          </View>
          <View className=" flex flex-row">
            <Text className="text-white ">RES</Text>
            <Text className="text-white ml-4 ">1090 X 1080</Text>
          </View>
        </View>

        <View className="bg-[#F5F5F533] bg-opacity-20 p-3">
          <View className=" flex flex-row">
            <Image
              source={icons.stopwatch}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor:"white"

              }}
            />
            <Text className="text-white ml-4">Flight Time</Text>
          </View>
          <View className=" flex flex-row">
            <Text className="text-white ">Time</Text>
            <Text className="text-white ml-4 ">35 min.</Text>
          </View>
          <View className=" flex flex-row">
            <Text className="text-white ">TMP</Text>
            <Text className="text-white ml-4 ">5°C</Text>
          </View>
        </View>

        <View className="bg-[#F5F5F533] bg-opacity-20 p-3">
          <View className=" flex flex-row">
            <Image
              source={icons.storage}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor:"white"

              }}
            />
            <Text className="text-white ml-4">128GB/240GB</Text>
          </View>
        </View>

        <View className="bg-[#F5F5F533] bg-opacity-20 p-3">
          <View className=" flex flex-row">
            <Image
              source={icons.internet}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor:"#00B528"
              }}
            />
            <Text className=" text-[#00B528] ml-4">Connected</Text>
          </View>
        </View>
        
      </View>
    </View>
  );
};

export default DroneDetails;
