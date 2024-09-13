import Icon from "@/assets/icons";
import Button from "@/components/Button";
import FeatureMissingAlert from "@/components/FeatureMissingAlert";
import ScreenWrapper from "@/components/ScreenWrapper";
import { type FontWeightTypes, theme } from "@/constants/theme";
import { useAuth } from "@/context/UserContext";
import { widthPercentage } from "@/helpers/common";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function HomeScreen() {
  const { user } = useAuth();

  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require("@/assets/images/Logo.png")}
        />

        <View style={styles.headerButtonsContainer}>
          <TouchableOpacity onPress={() => FeatureMissingAlert("Search")}>
            <Icon name={"search"} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => FeatureMissingAlert("Message")}>
            <Icon name={"message"} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => FeatureMissingAlert("Notification")}>
            <Icon name={"notification"} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.body}>
        <Text style={styles.greeting}>Hello {user?.name},</Text>
        <Text style={styles.trainingProgramDesc}>Please tap below</Text>

        <Button
          title="Large font title"
          subTitle="Sub-title"
          onPress={() => FeatureMissingAlert("Daily condition")}
        />

        <View style={styles.divider} />
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.3,
    borderBottomColor: theme.colors.lightGray,
    paddingHorizontal: theme.spacers.XXM,
    paddingBottom: theme.spacers.XXM,
    marginBottom: theme.spacers.S,
  },
  logo: {
    height: theme.spacers.L,
    width: widthPercentage(40),
  },
  headerButtonsContainer: {
    flexDirection: "row",
    gap: theme.spacers.M,
  },
  body: {
    paddingHorizontal: theme.spacers.XXM,
  },
  greeting: {
    textAlign: "center",
    fontSize: theme.spacers.M,
    fontWeight: theme.fonts.semibold as FontWeightTypes,
    marginBottom: theme.spacers.XXM,
  },
  trainingProgramDesc: {
    fontSize: theme.spacers.XM,
    fontWeight: theme.fonts.medium as FontWeightTypes,
    marginBottom: theme.spacers.XM,
  },
  divider: {
    height: 0.3,
    backgroundColor: theme.colors.lightGray,
    marginVertical: theme.spacers.XL,
  },
});
