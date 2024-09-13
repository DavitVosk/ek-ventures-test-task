import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

export const heightPercentage = (percentage: number) => {
  return percentage * deviceHeight * 0.01;
};

export const widthPercentage = (percentage: number) => {
  return percentage * deviceWidth * 0.01;
};
