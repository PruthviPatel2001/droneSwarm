import images from "../constants/images";
import videos from "../constants/videos";

const drones = [
  {
    id: 1,
    name: "Drone 1",
    details: {
      title: "DJI Mavic Air Drone - 1",
      battery: "2200",
      batteryPerc: "50%",
      range: "180m",
      flyingTimeLeft: "20 mins",
      speed: "3200",
    },
    camera_details: {
      vq: "1080p",
      res: "1920*1080",
      current_View: images.droneZero,
      video_View: videos.vOne,
    },
    flight_time: {
      time: "35 min",
      tempreature: "5°C",
    },
    storage: "12GB",
    connection_status: true,
  },
  {
    id: 2,
    name: "Drone 2",
    details: {
      title: "DJI Mavic Air Drone - 2 ",
      battery: "3000",
      batteryPerc: "50%",
      range: "180",
      flyingTimeLeft: "20 mins",
      speed: "3200",
    },
    camera_details: {
      vq: "1080p",
      res: "1920*1080",
      current_View: images.droneOne,
      video_View: videos.vTwo,
    },
    flight_time: {
      time: "35 min",
      tempreature: "5°C",
    },
    storage: "10GB",
    connection_status: true,
  },
  {
    id: 3,
    name: "Drone 3",
    details: {
      title: "DJI Mavic Air Drone - 3",
      battery: "3200",
      batteryPerc: "50%",
      range: "180",
      flyingTimeLeft: "20 mins",
      speed: "3200",
    },
    camera_details: {
      vq: "1080p",
      res: "1920*1080",
      current_View: images.droneTwo,
      video_View: videos.vThree,
    },
    flight_time: {
      time: "35 min",
      tempreature: "5°C",
    },
    storage: "5GB",
    connection_status: true,
  },
  {
    id: 4,
    name: "Drone 4",
    details: {
      title: "DJI Mavic Air Drone - 4  ",
      battery: "3200",
      batteryPerc: "50%",
      range: "180",
      flyingTimeLeft: "20 mins",
      speed: "3200",
    },
    camera_details: {
      vq: "1080p",
      res: "1920*1080",
      current_View: images.droneThree,
      video_View: videos.vFour,
    },
    flight_time: {
      time: "35 min",
      tempreature: "5°C",
    },
    storage: "5GB",
    connection_status: true,
  },
];

export default drones;
