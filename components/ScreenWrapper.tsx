import { View } from "react-native";
import React, { ReactNode } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { theme } from "@/constants/theme";

interface ScreenWrapperProps {
  children: ReactNode;
  backgroundColor?: string;
}

const ScreenWrapper = ({
  children,
  backgroundColor = theme.colors.background,
}: ScreenWrapperProps) => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 5 : 30;

  return (
    <View style={{ flex: 1, paddingTop, backgroundColor }}>{children}</View>
  );
};

export default ScreenWrapper;
