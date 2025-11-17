import React from "react";
import { Image } from "react-native";

export default function WeatherIcon({
  icon,
  size = 100,
}: {
  icon: string;
  size?: number;
}) {
  return (
    <Image
      source={{ uri: icon }}
      style={{ width: size, height: size }}
      resizeMode="contain"
    />
  );
}
