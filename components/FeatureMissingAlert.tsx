import { Alert } from "react-native";
import React from "react";

const FeatureMissingAlert = (featureName: string) => {
  return Alert.alert(
    featureName,
    "Feature is not in place yet. Please check later"
  );
};

export default FeatureMissingAlert;
