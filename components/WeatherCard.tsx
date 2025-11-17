import React from "react";
import { Text, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import WeatherIcon from "./WeatherIcon";
import Animated, { FadeInUp } from "react-native-reanimated";

export default function WeatherCard({
  city,
  temp,
  desc,
  icon,
}: {
  city: string;
  temp: number;
  desc: string;
  icon: string;
}) {
  return (
    <Animated.View entering={FadeInUp.duration(700)} style={{ width: "100%" }}>
      <BlurView intensity={55} tint="light" style={styles.card}>
        <Text style={styles.city}>{city}</Text>

        <Animated.View entering={FadeInUp.delay(150).duration(600)}>
          <WeatherIcon icon={icon} size={130} />
        </Animated.View>

        <Text style={styles.temp}>{Math.round(temp)}°C</Text>
        <Text style={styles.desc}>{desc}</Text>
      </BlurView>
      
    </Animated.View>
    
  );
  
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    paddingVertical: 32,
    paddingHorizontal: 22,
    borderRadius: 26,
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.10)",   // light glass
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.35)",          // frosted border

    // iOS nice shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 10,

    // Android elevation
    elevation: 10,
  },

  city: {
    fontSize: 34,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  temp: {
    fontSize: 64,
    fontWeight: "800",
    color: "#ffffff",
    marginTop: 15,
  },
  desc: {
    fontSize: 22,
    color: "#fff",
    marginTop: 6,
    textTransform: "capitalize",
    opacity: 0.9,
  },
});
