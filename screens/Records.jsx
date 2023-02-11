import {
  ActivityIndicator,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import React, { useEffect, useState } from "react";

import axios from "axios";
import icons from "../constants/icons";
import moment from "moment/moment";
import recordData from "../Data/RecordsData";

const Records = () => {
  const [RecordsData, setRecordsData] = useState();
  const [Loader, setLoader] = useState(true);

  useEffect(() => {
    const getRecords = async () => {
      const res = await axios.get(
        "https://strandaidapi.azurewebsites.net/drone_record"
      );

      console.log("Records", res.data);
      res && setLoader(false);
      setRecordsData(res.data);
    };
    getRecords();
  }, []);

  console.log(ResponeData);

  return (
    <View className=" bg-[#17233B] flex-1">
      <SafeAreaView style={styles.container}>
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
          {Loader ? (
            <View style={{ flex: 1, justifyContent: "center" }}>
              <ActivityIndicator className="mt-15" size="large" />
            </View>
          ) : (
            RecordsData?.map((val, index) => {
              const { object, date, time, lat, long, imageBy, ObjImg, imgUrl } =
                val;

              return (
                <View
                  key={index}
                  className="bg-[#F5F5F533] flex flex-row justify-between p-4 mt-4 m-4 rounded-lg"
                >
                  <Image
                    source={{
                      uri: imgUrl,
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
                      Date :{" "}
                      <Text className="text-base text-white">{date}</Text>
                    </Text>

                    <Text
                      className="text-lg text-white mt-2"
                      style={{ fontFamily: "RobotoBold" }}
                    >
                      Time :{" "}
                      <Text className="text-base text-white">
                        {moment(time).format("LT")}
                      </Text>
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
            })
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Records;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
})
