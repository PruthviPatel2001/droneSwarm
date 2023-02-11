import { AVPlaybackStatus, Video } from "expo-av";
import {
  ActivityIndicator,
  ImageBackground, Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import DroneList from "../components/HomeComp/DroneList";
import { LivePlayer } from "react-native-live-stream";
import WebView from "react-native-webview";
import axios from "axios";
import drones from "../Data/DroneData";
import images from "../constants/images";

const Stream = () => {
  const [SelectedDroneId, setSelectedDroneId] = useState(1);
  const [ViewImage, setViewImage] = useState();
  const [ViewVideo, setViewVideo] = useState();
  const [Loader, setLoader] = useState(false);
  const [SelectedDrone, setSelectedDrone] = useState();
  const [loader, setloader] = useState(true);
  const [DroneData, setDroneData] = useState();
  useEffect(() => {
    let viewImg = ViewImage;

    setLoader(true);

    const filterData = drones.find((val) => val.id === SelectedDroneId);

    setViewImage(filterData.camera_details.current_View);
    setViewVideo(filterData.camera_details.video_View);
    setSelectedDrone(filterData);

    ViewImage && setLoader(false);

    setTimeout(() => {
      setloader(false);
    }, "5000");
  }, [SelectedDroneId]);


  useEffect(() => {
    const getDroneData = async () => {
      const res = await axios.get("https://strandaidapi.azurewebsites.net/all");


      setDroneData(res.data);
    };

    getDroneData();
  }, []);

  const video = React.useRef(null);
  return (
    <>
      <View className="p-1 mt-8">
        <Text
          className="mt-14 px-4 text-xl "
          style={{ fontFamily: "RobotoBold" }}
        >
          Live Stream
        </Text>
        <DroneList
          styling={{ backgroundColor: "#17233B" }}
          setSelectedDroneId={setSelectedDroneId}
          data={DroneData}
        />
      </View>

      <View style={styles.container} className="bg[#17233B]">
        {/* <Text
          className="mt-14 px-4 text-xl "
          style={{ fontFamily: "RobotoBold" }}
        >
          Live Stream
        </Text> */}

        {loader ? (
          <View style={{ flex: 1, justifyContent: "center" }}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <>

               <Text style={styles.andView}>Work In Progress</Text>
                  <WebView
                  source={{
                    html: '<iframe  width="100%" height="50%" src="http://192.168.203.4:5000/video" frameborder="0" allow="autoplay; encrypted-media" ></iframe>',
                  }}
                  className="mt-24 bg-white"
                  style={styles.andView}
                  androidHardwareAccelerationDisabled
                  />

          </>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  andView:{
     display: Platform.OS === 'ios' ?"block":"inline"
  },
  iosView:{
    display:Platform.OS==='android'?"block":"inline"
  }
});
export default Stream;
