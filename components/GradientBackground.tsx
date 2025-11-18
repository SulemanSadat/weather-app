import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

export default function GradientBackground({
  condition,
  children,
}: {
  condition: string;
  children: React.ReactNode;
}) {
  const gradient = getGradient(condition);

  return (
  <Animated.View
    entering={FadeIn.duration(700)}
    exiting={FadeOut.duration(700)}
    style={{ flex: 1 }}
  >
    <LinearGradient colors={gradient} style={styles.bg}>
      <View style={styles.inner}>{children}</View>
    </LinearGradient>
  </Animated.View>
);
}

function getGradient(condition: string) {
  const text = condition.toLowerCase();


  const hour = new Date().getHours();
  const isNight = hour >= 19 || hour <= 5;

  
  if (text.includes("clear")) {
    return isNight
      ? ["#0f2027", "#203a43", "#2c5364"]
      : ["#fceabb", "#f8b500"]; 
  }

  if (text.includes("cloud")) {
    return isNight
      ? ["#2c3e50", "#4ca1af"] 
      : ["#bdc3c7", "#2c3e50"]; 
  }


  if (
    text.includes("rain") ||
    text.includes("drizzle") ||
    text.includes("shower")
  ) {
    return isNight
      ? ["#232526", "#414345"] 
      : ["#4b79a1", "#283e51"]; 
  }

 
  if (text.includes("thunder") || text.includes("storm")) {
    return ["#141E30", "#243B55"]; 
  }

  
  if (text.includes("snow") || text.includes("blizzard")) {
    return ["#E0EAFC", "#CFDEF3"]; 
  }

 
  if (text.includes("mist") || text.includes("fog")) {
    return ["#3E5151", "#DECBA4"];
  }


  return ["#4e54c8", "#8f94fb"];
}


const styles = StyleSheet.create({
  bg: { flex: 1 },
  inner: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    alignItems: "center",
  },
});
