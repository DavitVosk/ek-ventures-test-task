import Icon from "@/assets/icons";
import Button from "@/components/Button";
import DailyConditionCard from "@/components/DailyConditionCard";
import FeatureMissingAlert from "@/components/FeatureMissingAlert";
import MediaCard from "@/components/MediaCard";
import ScreenWrapper from "@/components/ScreenWrapper";
import { type FontWeightTypes, theme } from "@/constants/theme";
import { useMedia } from "@/context/MediaContext";
import { useAuth } from "@/context/UserContext";
import { widthPercentage } from "@/helpers/common";
import {
  FailedResultProps,
  fetchMedias,
  SuccessResultProps,
} from "@/services/mediaService";
import { router } from "expo-router";
import { useCallback, useEffect } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  FlatList,
} from "react-native";

const HomeScreen = () => {
  const { user } = useAuth();
  const { medias, setMedias } = useMedia();

  useEffect(() => {
    fetchMediasData();
  }, []);

  const fetchMediasData = async () => {
    const res = await fetchMedias();

    if (res.success) {
      setMedias((res as SuccessResultProps).data);
    } else {
      Alert.alert((res as FailedResultProps).message);
    }
  };

  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require("@/assets/images/Logo.png")}
        />

        <View style={styles.headerButtonsContainer}>
          <TouchableOpacity onPress={FeatureMissingAlert}>
            <Icon name={"search"} />
          </TouchableOpacity>

          <TouchableOpacity onPress={FeatureMissingAlert}>
            <Icon name={"message"} />
          </TouchableOpacity>

          <TouchableOpacity onPress={FeatureMissingAlert}>
            <Icon name={"notification"} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.body}>
        <Text style={styles.greeting}>Hello {user?.name},</Text>
        <Text style={styles.trainingProgramDesc}>Please tap below</Text>

        <DailyConditionCard
          title="Large font title"
          subTitle="Sub-title"
          onPress={FeatureMissingAlert}
        />

        <View style={styles.divider} />

        <View style={styles.mediaHeaderWrapper}>
          <Icon name={"mediaFilled"} color={theme.colors.black} />
          <Text>Media</Text>
        </View>

        <FlatList
          data={medias}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(media) => media.id.toString()}
          renderItem={({ item, index }) => (
            <MediaCard
              media={item}
              onPress={() =>
                router.push({
                  pathname: "/(tabs)/media",
                  params: { mediaIndex: index },
                })
              }
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.mediaSeparator} />}
        />

        <Button
          title="Upload"
          onPress={FeatureMissingAlert}
          icon={useCallback(
            () => (
              <Icon name={"camera"} />
            ),
            []
          )}
        />
      </ScrollView>
    </ScreenWrapper>
  );
}

export default HomeScreen;

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
    marginVertical: theme.spacers.SL,
  },
  mediaHeaderWrapper: {
    flexDirection: "row",
    gap: theme.spacers.XXS,
    alignItems: "center",
    marginBottom: theme.spacers.XM,
  },
  mediaHeaderTitle: {
    fontSize: theme.spacers.XM,
    fontWeight: theme.fonts.semibold as FontWeightTypes,
    lineHeight: theme.spacers.SL,
  },
  mediaSeparator: {
    width: theme.spacers.XXS,
  },
});
