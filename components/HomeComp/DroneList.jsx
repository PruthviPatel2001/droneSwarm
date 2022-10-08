import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const DroneList = ({ data, setSelectedDroneId ,styling}) => {


  const handlePress =(id) =>{
    setSelectedDroneId(id)
  }


  



  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingTop: 10,
      }}
    >
      {data?.map((val) => {
        const { drone_id, drone_name } = val;

        return (
          <View
            key={drone_id}
            className="bg-[#F5F5F533] bg-opacity-20 p-4 ml-4 rounded-md"
            style={{
              ...styling
            }}
          >
            <TouchableOpacity
             onPress={()=>handlePress(drone_id)}
            >
              <Text
                className="text-white text-base"
                style={{ fontFamily: "RobotoBold" }}
              >
                {drone_name}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default DroneList;
