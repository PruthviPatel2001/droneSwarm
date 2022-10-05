import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

import DroneDetails from "../components/HomeComp/DroneDetails";
import DroneList from "../components/HomeComp/DroneList";

const Home = () => {
  const [SelectedDrone, setSelectedDrone] = useState();
  const [SelectedDroneId, setSelectedDroneId] = useState(1);

  const drones = [
    {
      id: 1,
      name: "Drone 1",
      details: {
        title: "DJI Mavic Air Drone ",
        battery: "",
        range: "",
        flyingTimeLeft: "20 mins",
        speed: "3200",
      },
      camera_details: {
        vq: "1080p",
        res: "1920*1080",
      },
      flight_time: {
        time: "35 min",
        tempreature: "5°C",
      },
      storage: "120gb",
      connection_status: true,
    },
    {
      id: 2,
      name: "Drone 2",
      details: {
        title: "DJI Mavic Air Drone ",
        battery: "",
        range: "",
        flyingTimeLeft: "20 mins",
        speed: "3200",
      },
      camera_details: {
        vq: "1080p",
        res: "1920*1080",
      },
      flight_time: {
        time: "35 min",
        tempreature: "5°C",
      },
      storage: "120gb",
      connection_status: true,
    },
    {
      id: 3,
      name: "Drone 3",
      details: {
        title: "DJI Mavic Air Drone ",
        battery: "",
        range: "",
        flyingTimeLeft: "20 mins",
        speed: "3200",
      },
      camera_details: {
        vq: "1080p",
        res: "1920*1080",
      },
      flight_time: {
        time: "35 min",
        tempreature: "5°C",
      },
      storage: "120gb",
      connection_status: true,
    },
    {
      id: 4,
      name: "Drone 4",
      details: {
        title: "DJI Mavic Air Drone ",
        battery: "",
        range: "",
        flyingTimeLeft: "20 mins",
        speed: "3200",
      },
      camera_details: {
        vq: "1080p",
        res: "1920*1080",
      },
      flight_time: {
        time: "35 min",
        tempreature: "5°C",
      },
      storage: "120gb",
      connection_status: true,
    },
  ];

  useEffect(() => {
    const filterData = drones.find((val) => val.id === SelectedDroneId);

    setSelectedDrone(filterData);
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
            <Text>Profie</Text>
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
            <DroneList setSelectedDroneId={setSelectedDroneId} data={drones} />
            <Text
              className="text-white text-base mt-2 p-4 pb-0"
              style={{ fontFamily: "RobotoBlack" }}
            >
              Deatils of drone: {SelectedDroneId}
            </Text>
            <DroneDetails data={SelectedDrone} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;
