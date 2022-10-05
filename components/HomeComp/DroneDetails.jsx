import { Image, Text, View } from "react-native";

import React from "react";
import icons from "../../constants/icons";

const DroneDetails = ({ data }) => {
  return (
    <View className="mt-2">
      <View className="p-5">
        <View className="col-span-2 bg-[#F5F5F533] bg-opacity-20 p-4 rounded-lg">
          <View className="flex justify-between items-center flex-row">
            <Text className="text-white" style={{fontFamily:'RobotoBold'}}>{data.details.title}</Text>
            <Text className="text-white ml-4" style={{fontFamily:'RobotoBold'}}>3200 mAh</Text>
          </View>

          <View className="flex flex-row mt-4">
            <Image
              source={icons.battery}
              resizeMode="contain"
              style={{
                width: 18,
                height: 18,
                tintColor: "white",
              }}
            />
            <Text className="text-white ml-4" style={{fontFamily:'RobotoBold'}}>48% Battery</Text>
          </View>

          <View className="flex flex-row mt-3">
            <Image
              source={icons.compass}
              resizeMode="contain"
              style={{
                width: 18,
                height: 18,
                tintColor: "white",
              }}
            />
            <Text className="text-white  ml-4" style={{fontFamily:'RobotoBold'}}>180m Range</Text>
          </View>

          <View className="flex flex-row mt-3">
            <Image
              source={icons.wallclock}
              resizeMode="contain"
              style={{
                width: 18,
                height: 18,
                tintColor: "white",
              }}
            />
            <Text className="text-white  ml-4" style={{fontFamily:'RobotoBold'}}>20 Mins Flying Left</Text>
          </View>
        </View>
      </View>

      <View className="p-5 pt-0 flex flex-row ">
        <View className="bg-[#F5F5F533] w-50 bg-opacity-20 p-3 rounded-lg w-2/4">
          <View className=" flex flex-row">
            <Image
              source={icons.wallclock}
              resizeMode="contain"
              style={{
                width: 18,
                height: 18,
                tintColor: "white",
              }}
            />
            <Text className="text-white ml-5" style={{fontFamily:'RobotoBold'}}>Camera Type</Text>
          </View>
          <View className=" flex flex-row mt-2">
            <Text className="text-white w-12 " style={{fontFamily:'RobotoBold'}}>VQ</Text>
            <Text className="text-white ml-5 " style={{fontFamily:'RobotoBold'}}>1080p</Text>
          </View>
          <View className=" flex flex-row mt-1">
            <Text className="text-white w-12 " style={{fontFamily:'RobotoBold'}}>RES</Text>
            <Text className="text-white ml-5 " style={{fontFamily:'RobotoBold'}}> 1090 X 1080</Text>
          </View>
        </View>

        <View className="bg-[#F5F5F533] bg-opacity-20 p-3 rounded-lg ml-2 w-2/4">
          <View className=" flex flex-row">
            <Image
              source={icons.stopwatch}
              resizeMode="contain"
              style={{
                width: 18,
                height: 18,
                tintColor: "white",
              }}
            />
            <Text className="text-white ml-5" style={{fontFamily:'RobotoBold'}}>Flight Time</Text>
          </View>
          <View className=" flex flex-row mt-2">
            <Text className="text-white w-12 " style={{fontFamily:'RobotoBold'}}>Time</Text>
            <Text className="text-white ml-4 " style={{fontFamily:'RobotoBold'}}>35 min.</Text>
          </View>
          <View className=" flex flex-row mt-1">
            <Text className="text-white w-12" style={{fontFamily:'RobotoBold'}}>TMP</Text>
            <Text className="text-white ml-4 " style={{fontFamily:'RobotoBold'}}>5°C</Text>
          </View>
        </View>
      </View>

      <View className="p-5 pt-1 flex flex-row">
        <View className="bg-[#F5F5F533] bg-opacity-20 p-5 rounded-lg w-2/4">
          <View className=" flex flex-row">
            <Image
              source={icons.storage}
              resizeMode="contain"
              style={{
                width: 18,
                height: 18,
                tintColor: "white",
              }}
            />
            <Text className="text-white ml-4" style={{fontFamily:'RobotoBold'}}>128GB/240GB</Text>
          </View>
        </View>

        <View className="bg-[#F5F5F533] bg-opacity-20 p-5 rounded-lg ml-2 w-2/4">
          <View className=" flex flex-row">
            <Image
              source={icons.internet}
              resizeMode="contain"
              style={{
                width: 18,
                height: 18,
                tintColor: "#00B528",
              }}
            />
            <Text className=" text-[#00B528] ml-4" style={{fontFamily:'RobotoBold'}}>Connected</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DroneDetails;
