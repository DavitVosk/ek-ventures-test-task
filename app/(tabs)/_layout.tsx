import { Tabs } from "expo-router";
import React from "react";
import { Image } from "react-native";

import { theme } from "@/constants/theme";
import Icon from "@/assets/icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.black,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Icon name={focused ? "homeFilled" : "homeOutline"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="media"
        options={{
          title: "Media",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? "mediaFilled" : "mediaOutline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="games"
        options={{
          title: "Games",
          tabBarIcon: ({ color }) => <Icon name={"games"} color={color} />,
        }}
      />
      <Tabs.Screen
        name="reports"
        options={{
          title: "Reports",
          tabBarIcon: ({ color }) => <Icon name={"reports"} color={color} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: () => (
            <Image
              style={{ height: 28, width: 28 }}
              source={require("@/assets/images/Avatar.png")}
            />
          ),
        }}
      />
    </Tabs>
  );
}
