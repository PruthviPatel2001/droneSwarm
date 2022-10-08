// import { AVPlaybackStatus, Video } from "expo-av";

import {
  ActivityIndicator,
  Button,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import DroneList from "../components/HomeComp/DroneList";
import { WebView } from "react-native-webview";
import axios from "axios";
import drones from "../Data/DroneData";
import images from "../constants/images";

// import Video from 'react-native'

const Stream = () => {
  const [SelectedDroneId, setSelectedDroneId] = useState(1);
  const [ViewImage, setViewImage] = useState();
  const [ViewVideo, setViewVideo] = useState();
  const [Loader, setLoader] = useState(false);
  const [SelectedDrone, setSelectedDrone] = useState();
  const [VideoSrc, setVideoSrc] = useState();
  const [status, setStatus] = React.useState({});

  // useEffect(() => {
  //   let viewImg = ViewImage;

  //   setLoader(true);

  //   const filterData = drones.find((val) => val.id === SelectedDroneId);

  //   setViewImage(filterData.camera_details.current_View);
  //   setViewVideo(filterData.camera_details.video_View);
  //   setSelectedDrone(filterData);

  //   ViewImage && setLoader(false);
  // }, [SelectedDroneId]);

  // useEffect(() => {
  //   video.current.playAsync()
  // }, [video]);

  return (
    <View style={styles.container}>
      {/* <Image
        style={styles.video}
        source={{
          uri: "https://7b14-106-205-216-61.in.ngrok.io/video",
        }}
      /> */}
      <WebView
        source={{
          html: '<iframe style="width:full-width;" width="100%" height="50%" src="https://7b14-106-205-216-61.in.ngrok.io/video" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        }}
        style={{ marginTop: 200,width:'100%',marginLeft:'10rem'}}
        className="mt-24"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
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
});

export default Stream;


////////

import {
    ActivityIndicator,
    ImageBackground,
    SafeAreaView,
    Text,
    View,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  
  import DroneList from "../components/HomeComp/DroneList";
  import Video from "react-native-video";
  import drones from "../Data/DroneData";
  import images from "../constants/images";
  
  const Stream = () => {
    const [SelectedDroneId, setSelectedDroneId] = useState(1);
    const [ViewImage, setViewImage] = useState();
    const [ViewVideo, setViewVideo] = useState();
    const [Loader, setLoader] = useState(false);
    const [SelectedDrone, setSelectedDrone] = useState();
  
    useEffect(() => {
      let viewImg = ViewImage;
  
      setLoader(true);
  
      const filterData = drones.find((val) => val.id === SelectedDroneId);
  
      setViewImage(filterData.camera_details.current_View);
      setViewVideo(filterData.camera_details.video_View)
      setSelectedDrone(filterData);
  
      ViewImage && setLoader(false);
    }, [SelectedDroneId]);
  
    return (
      <View className="flex-1">
        {/* <View style={{ flex: 1, justifyContent: "center" }}>
            <ActivityIndicator size="large" color="#17233B" />
          </View> */}
  
        <ImageBackground
          source={ViewImage}
          resizeMethod="cover"
          style={{ flex: 1 }}
        >
          <View className="flex-1">
            <View className="mt-16 p-4 bg-[#17233B] opacity-70 w-2/4 rounded">
              <Text className="text-2xl text-white">
                Drone : {SelectedDrone?.id}
              </Text>
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
  
        {/* <Video
          source={require('../assets/videos/vOne.mp4')}
          resizeMode="cover"
          style={{ flex:1 }}
          
        /> */}
        
  
      </View>
    );
  };
  
  export default Stream;
  