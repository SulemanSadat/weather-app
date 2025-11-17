import React from "react";
import { FlatList } from "react-native";
import ForecastCard from "./ForecastCard";
import Animated, { FadeInUp } from "react-native-reanimated";

export default function DailyForecastList({ data }) {
  return (
      <Animated.View entering={FadeInUp.delay(300).duration(700)}>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={(item) => item.date}
      renderItem={({ item }) => (
        <ForecastCard
          day={item.date}
          icon={`https:${item.day.condition.icon}`}
          max={Math.round(item.day.maxtemp_c)}
          min={Math.round(item.day.mintemp_c)}
        />
        
      )}
    />
      </Animated.View>
  );
}
