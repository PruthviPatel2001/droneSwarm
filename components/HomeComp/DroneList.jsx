import { ScrollView, Text, View } from "react-native";

import React from "react";

const DroneList = ({data}) => {


  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingTop: 10,
      }}
    >
      {data.map((val) => {
        const { id, name } = val;

        return (
          <View key={id} className="bg-[#F5F5F533] bg-opacity-20 p-4 ml-4 rounded-md">
            <Text className="text-white text-base" style={{fontFamily:"RobotoRegular"}}>
                {name}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default DroneList;
