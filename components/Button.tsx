import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { FontWeightTypes, theme } from "@/constants/theme";
import Icon from "@/assets/icons";

type ButtonProps = {
  title: string;
  subTitle: string;
  onPress: () => void;
};

const Button = ({ title, subTitle, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View style={styles.heartBeatWrapper}>
        <Icon name={"heartBeat"} color={theme.colors.background} />
      </View>

      <View style={styles.infoWrapper}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.subTitleWrapper}>
          <Text style={styles.subTitle}>{subTitle}</Text>

          <View style={styles.diamondsWrapper}>
            <Icon name={"diamond"} />
            <Icon name={"diamond"} />
            <Icon name={"diamond"} />
          </View>
        </View>
      </View>

      <View style={styles.arrowWrapper}>
        <Icon name={"arrowRight"} />
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.lightYellow,
    height: 63,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: theme.radius.xl,
    borderColor: theme.colors.gray,
    borderWidth: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 15 },
    shadowColor: theme.colors.extraBlack,
    shadowOpacity: 0.1,
    elevation: 15,
  },
  title: {
    fontSize: theme.spacers.XXM,
    lineHeight: theme.spacers.SL,
    color: theme.colors.blackGray,
    fontWeight: theme.fonts.semibold as FontWeightTypes,
  },
  subTitle: {
    fontSize: theme.spacers.S,
    lineHeight: theme.spacers.SL,
    color: theme.colors.blackGray,
    fontWeight: theme.fonts.normal as FontWeightTypes,
  },
  subTitleWrapper: {
    alignItems: "center",
    flexDirection: "row",
    gap: 5.25,
  },
  heartBeatWrapper: {
    height: "100%",
    backgroundColor: theme.colors.green,
    borderTopLeftRadius: theme.radius.xl,
    borderBottomLeftRadius: theme.radius.xl,
    alignItems: "center",
    alignSelf: "flex-start",
    justifyContent: "center",
    paddingVertical: theme.spacers.XXM,
    paddingHorizontal: theme.spacers.XS,
  },
  diamondsWrapper: {
    flexDirection: "row",
    gap: theme.spacers.XXXS,
  },
  infoWrapper: {
    flex: 1,
    alignItems: "center",
  },
  arrowWrapper: {
    flex: 0.1,
    alignItems: "center",
  },
});
