import {ClipboardDocumentListIcon, HomeIcon, UserCircleIcon, VideoCameraIcon} from "react-native-heroicons/outline"
import { Home, Profile, Records, Stream } from "../screens";
import { Text, View } from "react-native";

import React from "react";
import { TabIcon } from "../components/BottomBar/TabIcon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
            return <TabIcon focused={focused} icon={<HomeIcon/>} label="Home" />;
          },
        }}
      />
      <Tab.Screen
        name="Stream"
        component={Stream}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabIcon focused={focused} icon={<VideoCameraIcon/>} label="Stream" />;
          },
        }}
      />
      <Tab.Screen
        name="Records"
        component={Records}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabIcon focused={focused} icon={<ClipboardDocumentListIcon/>} label="Records" />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabIcon focused={focused} icon={<UserCircleIcon/>} label="Profile" />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
