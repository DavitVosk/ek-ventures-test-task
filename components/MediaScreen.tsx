import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { memo, useEffect, useRef } from "react";
import { MediaProps } from "@/context/MediaContext";
import { ResizeMode, Video } from "expo-av";
import { widthPercentage } from "@/helpers/common";
import { useIsFocused } from "@react-navigation/native";
import { MEDIA_SCREEN_ITEM_HEIGHT } from "@/app/constants";
import Icon from "@/assets/icons";
import { FontWeightTypes, theme } from "@/constants/theme";
import FeatureMissingAlert from "./FeatureMissingAlert";
import { formatCount } from "@/helpers/format";

interface MediaScreenProps {
  media: MediaProps;
  focusedMediaId: number;
  index: number;
}

const MediaScreen = memo(
  ({ media, focusedMediaId, index }: MediaScreenProps) => {
    const ref = useRef<Video>(null);
    const isFocused = useIsFocused();

    useEffect(() => {
      if (focusedMediaId == index && isFocused) {
        ref?.current?.playAsync();
      } else {
        ref?.current?.pauseAsync();
      }
    }, [focusedMediaId, isFocused, ref]);

    return (
      <>
        <Video
          ref={ref}
          style={styles.video}
          resizeMode={ResizeMode.COVER}
          source={{ uri: media.urls.mp4 }}
          isLooping
        >
          <View style={styles.loaderWrapper}>
            <ActivityIndicator />
          </View>
        </Video>

        <>
          <TouchableOpacity
            style={styles.likeInfoWrapper}
            onPress={FeatureMissingAlert}
          >
            <Icon name={"like"} />
            <Text style={styles.countInfo}>
              {formatCount(media.likes_count)}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.commentInfoWrapper}
            onPress={FeatureMissingAlert}
          >
            <Icon name={"comment"} />
            <Text style={styles.countInfo}>
              {formatCount(media.comments_count)}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.extraInfoWrapper}
            onPress={FeatureMissingAlert}
          >
            <Icon name={"threeDots"} />
          </TouchableOpacity>
        </>

        <View style={styles.header}>
          <Text style={styles.mediaTitle}>Media</Text>

          <View style={styles.mediaIconWrapper}>
            <Icon name={"cameraOutline"} />
          </View>
        </View>
      </>
    );
  }
);

export default MediaScreen;

const styles = StyleSheet.create({
  video: {
    height: MEDIA_SCREEN_ITEM_HEIGHT,
    width: widthPercentage(100),
  },
  loaderWrapper: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: theme.colors.lightBlack,
  },
  likeInfoWrapper: {
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: theme.spacers.XXXS,
    shadowOpacity: 0.25,
    shadowColor: theme.colors.black,
    elevation: 5,
    position: "absolute",
    right: theme.spacers.M,
    bottom: 130,
    alignItems: "center",
    gap: theme.spacers.XXS,
  },
  commentInfoWrapper: {
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: theme.spacers.XXXS,
    shadowOpacity: 0.25,
    shadowColor: theme.colors.black,
    elevation: 5,
    position: "absolute",
    right: theme.spacers.M,
    bottom: 60,
    alignItems: "center",
    gap: theme.spacers.XXS,
  },
  extraInfoWrapper: {
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: theme.spacers.XXXS,
    shadowOpacity: 0.25,
    shadowColor: theme.colors.black,
    elevation: 5,
    position: "absolute",
    right: 26,
    bottom: 26,
    alignItems: "center",
    gap: theme.spacers.XXS,
  },
  countInfo: {
    fontSize: theme.spacers.S,
    lineHeight: theme.spacers.XXM,
    color: theme.colors.background,
    fontWeight: theme.fonts.semibold as FontWeightTypes,
  },
  mediaTitle: {
    fontSize: theme.spacers.M,
    lineHeight: theme.spacers.SL,
    color: theme.colors.background,
    fontWeight: theme.fonts.semibold as FontWeightTypes,
  },
  mediaIconWrapper: {
    position: "absolute",
    right: theme.spacers.XXM,
  },
  header: {
    width: widthPercentage(100) - theme.spacers.XXM,
    position: "absolute",
    top: 64,
    left: theme.spacers.XXM,
    flexDirection: "row",
    alignItems: "center",
  },
});
