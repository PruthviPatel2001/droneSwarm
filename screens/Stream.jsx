import {
  ActivityIndicator,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import DroneList from "../components/HomeComp/DroneList";
import drones from "../Data/DroneData";
import images from "../constants/images";

const Stream = () => {
  const [SelectedDroneId, setSelectedDroneId] = useState(1);
  const [ViewImage, setViewImage] = useState();
  const [Loader, setLoader] = useState(false);
  const [SelectedDrone, setSelectedDrone] = useState();

  useEffect(() => {
    let viewImg = ViewImage;

    setLoader(true);

    console.log("here")

    const filterData = drones.find((val) => val.id === SelectedDroneId);

    setViewImage(filterData.camera_details.current_View);
    setSelectedDrone(filterData);
    console.log("here 2")

    ViewImage && setLoader(false);
  }, [SelectedDroneId]);

  return (
    <View className="flex-1">
      {Loader ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color="#17233B" />
        </View>
      ) : (
        <ImageBackground
          source={ViewImage}
          resizeMethod="cover"
          style={{ flex: 1 }}
        >
          <View className="flex-1">
            <View className="mt-16 p-4 bg-[#17233B] opacity-70 w-2/4 rounded">
              <Text className="text-2xl text-white">Drone : {SelectedDrone?.id}</Text>
            </View>
          </View>
          <View className="p-2">
            <DroneList
              setSelectedDroneId={setSelectedDroneId}
              data={drones}
              styling={{ backgroundColor: "#17233B" }}
            />
          </View>
        </ImageBackground>
      )}
    </View>
  );
};

export default Stream;
