import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { ComponentType } from "react";
import { FontWeightTypes, theme } from "@/constants/theme";
import { SvgProps } from "react-native-svg";

interface ButtonProps {
  title: string;
  onPress: () => void;
  icon: ComponentType<SvgProps>;
}

const Button = ({ title, onPress, icon: IconComponent }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {IconComponent && <IconComponent />}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: theme.radius.xxs,
    marginVertical: theme.spacers.M,
    gap: theme.spacers.XXS,
  },
  title: {
    fontSize: theme.spacers.XXM,
    fontWeight: theme.fonts.medium as FontWeightTypes,
    color: theme.colors.background,
  },
});
