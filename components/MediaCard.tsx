import { ActivityIndicator, Pressable, StyleSheet, View } from "react-native";
import React, { memo } from "react";
import { ResizeMode, Video } from "expo-av";

import { MediaProps } from "@/context/MediaContext";
import { theme } from "@/constants/theme";

interface MediaCardProps {
  media: MediaProps;
  onPress: () => void;
}

const MediaCard = memo(({ media, onPress }: MediaCardProps) => {
  return (
    <Pressable onPress={onPress}>
      <Video
        style={styles.postVideo}
        resizeMode={ResizeMode.COVER}
        source={{ uri: media.urls.mp4 }}
      >
        <View style={styles.loaderWrapper}>
          <ActivityIndicator />
        </View>
      </Video>
    </Pressable>
  );
});

export default MediaCard;

const styles = StyleSheet.create({
  postVideo: {
    height: 370,
    width: 208,
    borderRadius: theme.radius.sm,
    alignContent: "center",
    justifyContent: "center",
  },
  loaderWrapper: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: theme.colors.background,
  },
});
