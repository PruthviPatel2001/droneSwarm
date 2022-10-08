import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import axios from "axios";
import icons from "../constants/icons";
import moment from "moment/moment";
import recordData from "../Data/RecordsData";

const Records = () => {

  const [RecordsData, setRecordsData] = useState();
  

  useEffect(() => {
 
    const getRecords = async() =>{
      const res = await axios.get('https://comikstorm.pythonanywhere.com/drone_record')

      console.log("Records",res.data)
      setRecordsData(res.data)
    }
    getRecords()
  }, []);

  return (
    <View className=" bg-[#17233B] flex-1">
      <SafeAreaView>
        <View className="flex justify-between flex-row p-4">
          <Text
            className="text-white text-3xl"
            style={{ fontFamily: "RobotoBold" }}
          >
            Records
          </Text>
        </View>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 80,
          }}
          showsVerticalScrollIndicator={false}
        >
          {RecordsData?.map((val,index) => {
            const { object, date, time, lat, long, imageBy, ObjImg ,imgUrl} = val;

            return (
              <View key={index} className="bg-[#F5F5F533] flex flex-row justify-between p-4 mt-4 m-4 rounded-lg">
                <Image
                  source={{
                    uri: `https://comikstorm.pythonanywhere.com/static/${imgUrl}`,
                  }}
                  style={{
                    width: 100,
                    height: 180,
                  }}
                />
                <View className=" ml-4">
                  <Text
                    className="text-lg text-white"
                    style={{ fontFamily: "RobotoBold" }}
                  >
                    Detected Object :
                    <Text className="text-base text-white"> {object}</Text>
                  </Text>

                  <Text
                    className="text-lg text-white mt-2"
                    style={{ fontFamily: "RobotoBold" }}
                  >
                    Date : <Text className="text-base text-white">{date}</Text>
                  </Text>

                  <Text
                    className="text-lg text-white mt-2"
                    style={{ fontFamily: "RobotoBold" }}
                  >
                    Time : <Text className="text-base text-white">{moment(time).format('LT')}</Text>
                  </Text>

                  

                  <Text
                    className="text-lg text-white mt-2"
                    style={{ fontFamily: "RobotoBold" }}
                  >
                    Latitude:{" "}
                    <Text className="text-base text-white">{lat}</Text>
                  </Text>

                  <Text 
                  className="text-lg text-white mt-2"
              style={{ fontFamily: "RobotoBold" }}
                  
                  >
                    Longitude:{" "}
                    <Text className="text-base text-white">{long}</Text>
                  </Text>



                  <View className="flex flex-row mt-4">
                    <Image
                      source={icons.share}
                      style={{
                        width: 18,
                        height: 18,
                        tintColor: "white",
                      }}
                    />
                    <Image
                      source={icons.copy}
                      style={{
                        width: 18,
                        height: 18,
                        tintColor: "white",
                      }}
                      className="mx-4"
                    />
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Records;
