import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import DroneDetails from "../components/HomeComp/DroneDetails";
import DroneList from "../components/HomeComp/DroneList";
import UserAvatar from "react-native-user-avatar";
import axios from "axios";
import drones from "../Data/DroneData";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [SelectedDrone, setSelectedDrone] = useState();
  const [SelectedDroneId, setSelectedDroneId] = useState(1);
  const [DroneData, setDroneData] = useState();
  const [Loader, setLoader] = useState(true);
  const navigator = useNavigation();

  const image =
    "https://image.shutterstock.com/mosaic_250/2780032/1854697390/stock-photo-head-shot-young-attractive-businessman-in-glasses-standing-in-modern-office-pose-for-camera-1854697390.jpg";

  useEffect(() => {
    const getDroneData = async () => {
      const res = await axios.get("https://strandaid.azurewebsites.net/all");

      res && setLoader(false);
      setDroneData(res.data);
    };

    getDroneData();
  }, []);

  useEffect(() => {
    const getIndividualDrone = async () => {
      setLoader(true);
      const res = await axios.get(
        `https://strandaid.azurewebsites.net/list?id=${SelectedDroneId}`
      );
      res && setLoader(false);

      setSelectedDrone(res.data);
    };

    SelectedDroneId && getIndividualDrone();
  }, [SelectedDroneId]);

  return (
    <View className=" bg-[#17233B] flex-1">
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 20,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View className="flex justify-between flex-row p-4">
            <Text
              className="text-white text-3xl"
              style={{ fontFamily: "RobotoBold" }}
            >
              StrandAID
            </Text>
            <TouchableOpacity
              onPress={() => navigator.navigate("profilemodel")}
            >
              <UserAvatar size={40} name="Avishay Bar" src={image} />
            </TouchableOpacity>
          </View>
          <View className="mt-4 p-4">
            <Text
              className="text-white text-3xl"
              style={{ fontFamily: "RobotoBold" }}
            >
              Hello Admin,
            </Text>
          </View>

          <Text
            className="text-white text-base p-4"
            style={{ fontFamily: "RobotoBlack" }}
          >
            Drones:
          </Text>
          <View>
            {Loader ? (
              <View style={{ flex: 1, justifyContent: "center" }}>
                <ActivityIndicator className="mt-5" size="large" />
              </View>
            ) : (
              <>
                <DroneList
                  setSelectedDroneId={setSelectedDroneId}
                  data={DroneData}
                />
                <Text
                  className="text-white text-base mt-2 p-4 pb-0"
                  style={{ fontFamily: "RobotoBlack" }}
                >
                  Deatils of drone: {SelectedDroneId}
                </Text>
                <DroneDetails data={SelectedDrone} />
              </>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;
