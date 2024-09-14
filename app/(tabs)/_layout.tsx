import { Tabs } from "expo-router";
import React, { useState } from "react";
import { Image, View, TouchableOpacity, StyleSheet } from "react-native";

import { theme } from "@/constants/theme";
import Icon from "@/assets/icons";
import { TAB_BAR_HEIGHT } from "../constants";

export default function TabLayout() {
  const [inDarkModeView, setInDarkModeView] = useState<boolean>(false);

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: inDarkModeView
            ? theme.colors.lightBlack
            : theme.colors.background,
          height: TAB_BAR_HEIGHT,
        },
        tabBarActiveTintColor: inDarkModeView
          ? theme.colors.background
          : theme.colors.primary,
        tabBarButton: (props) => (
          <TouchableOpacity {...props} style={styles.wrapper}>
            <View style={styles.wrapper}>
              {props?.accessibilityState?.selected && (
                <View style={getSelectorStyle(inDarkModeView)} />
              )}
              {props.children}
            </View>
          </TouchableOpacity>
        ),
        tabBarInactiveTintColor: inDarkModeView
          ? theme.colors.background
          : theme.colors.lightBlack,
        headerShown: false,
      }}
      screenListeners={{
        state: (tab) => {
          if (tab.data.state.index == 1) {
            setInDarkModeView(true);
          } else {
            setInDarkModeView(false);
          }
        },
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
              style={styles.avatar}
              source={require("@/assets/images/Avatar.png")}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const getSelectorStyle = (inDarkModeView: boolean) => ({
  height: 3,
  marginHorizontal: 10,
  backgroundColor: inDarkModeView
    ? theme.colors.background
    : theme.colors.primary,
  borderBottomLeftRadius: theme.radius.xs,
  borderBottomRightRadius: theme.radius.xs,
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  avatar: {
    height: 27,
    width: 27,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
});
