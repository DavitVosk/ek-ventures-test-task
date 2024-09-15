import { useMedia } from "@/context/MediaContext";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, FlatList } from "react-native";
import MediaScreen from "@/components/MediaScreen";
import { useEffect, useRef, useState } from "react";
import { MEDIA_SCREEN_ITEM_HEIGHT } from "../constants";
import { theme } from "@/constants/theme";

const Media = () => {
  const { mediaIndex } = useLocalSearchParams();
  const { medias } = useMedia();
  const listRef = useRef<FlatList>(null);
  const [focusedMediaId, setFocusedMediaId] = useState<number>(0);

  useEffect(() => {
    if (mediaIndex) {
      setTimeout(() => {
        listRef?.current?.scrollToIndex({
          animated: true,
          index: Number(mediaIndex),
        });
      }, 100);
    }
  }, [mediaIndex]);

  return (
    <FlatList
      style={styles.list}
      ref={listRef}
      data={medias}
      keyExtractor={(media) => media.id.toString()}
      renderItem={({ item, index }) => (
        <MediaScreen
          media={item}
          focusedMediaId={focusedMediaId}
          index={index}
        />
      )}
      getItemLayout={(_, index) => ({
        length: MEDIA_SCREEN_ITEM_HEIGHT,
        offset: MEDIA_SCREEN_ITEM_HEIGHT * index,
        index,
      })}
      pagingEnabled
      decelerationRate="fast"
      automaticallyAdjustContentInsets
      onViewableItemsChanged={({ viewableItems }) => {
        setFocusedMediaId(viewableItems[0]?.index || 0);
      }}
      viewabilityConfig={{
        viewAreaCoveragePercentThreshold: 50,
      }}
    />
  );
};

export default Media;

const styles = StyleSheet.create({
  list: {
    backgroundColor: theme.colors.lightBlack,
  },
});
