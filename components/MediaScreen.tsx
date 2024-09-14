import { ActivityIndicator, StyleSheet, View } from "react-native";
import React, { memo, useEffect, useRef } from "react";
import { MediaProps } from "@/context/MediaContext";
import { ResizeMode, Video } from "expo-av";
import { heightPercentage, widthPercentage } from "@/helpers/common";
import { useIsFocused } from "@react-navigation/native";
import { TAB_BAR_HEIGHT } from "@/app/constants";

interface MediaScreenProps {
  media: MediaProps;
  focusedMediaId: number;
  index: number;
}

const MediaScreen = memo(
  ({ media, focusedMediaId, index }: MediaScreenProps) => {
    const ref = useRef(null);
    const isFocused = useIsFocused();

    useEffect(() => {
      if (focusedMediaId == index && isFocused) {
        ref?.current?.playAsync();
      } else {
        ref?.current?.pauseAsync();
      }
    }, [focusedMediaId, isFocused]);

    return (
      <View>
        <Video
          ref={ref}
          style={styles.video}
          resizeMode={ResizeMode.COVER}
          source={{ uri: media.urls.mp4 }}
          useNativeControls
          isLooping
        >
          <View style={styles.loaderWrapper}>
            <ActivityIndicator />
          </View>
        </Video>
      </View>
    );
  }
);

export default MediaScreen;

const styles = StyleSheet.create({
  video: {
    height: heightPercentage(100) - TAB_BAR_HEIGHT,
    width: widthPercentage(100),
  },
  loaderWrapper: {
    flex: 1,
    justifyContent: "center",
  },
});
