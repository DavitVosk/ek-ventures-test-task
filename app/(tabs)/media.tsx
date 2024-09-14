import { useMedia } from "@/context/MediaContext";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, FlatList } from "react-native";
import MediaScreen from "@/components/MediaScreen";
import { useEffect, useRef, useState } from "react";
import { heightPercentage } from "@/helpers/common";
import { TAB_BAR_HEIGHT } from "../constants";

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
        length: heightPercentage(100) - TAB_BAR_HEIGHT,
        offset: (heightPercentage(100) - TAB_BAR_HEIGHT) * index,
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

const styles = StyleSheet.create({});
