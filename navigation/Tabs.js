import {
  ClipboardDocumentListIcon,
  UserCircleIcon,
  VideoCameraIcon,
} from "react-native-heroicons/outline";
import { Home, Profile, Records, Stream } from "../screens";
import { Text, View } from "react-native";

import HomeIcon from "react-native-heroicons/outline/HomeIcon";
import React from "react";
import TabIcon from "../components/BottomBar/TabIcon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import icons from "../constants/icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 100,
          backgroundColor: "#FFFFFF",
          borderTopColor: "transparent",
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon focused={focused} icon={icons.home} label="Home" />
            );
          },
        }}
      />
      <Tab.Screen
        name="Stream"
        component={Stream}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabIcon focused={focused} icon={icons.stream} label="Stream" />;
          }, animationEnabled: false
        }}
      />
      <Tab.Screen
        name="Records"
        component={Records}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabIcon focused={focused} icon={icons.record} label="Records" />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabIcon focused={focused} icon={icons.profile} label="Profile" />;
          }
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
