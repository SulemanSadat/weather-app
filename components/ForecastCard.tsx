import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ForecastCard({ day, max, min, icon }) {
  return (
    <View style={styles.card}>
      <Text style={styles.day}>{day}</Text>
      <Image source={{ uri: icon }} style={styles.icon} />
      <Text style={styles.temp}>
        {max}° / {min}°
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
  width: 90,
  paddingVertical: 14,
  paddingHorizontal: 8,
  marginRight: 14,
  backgroundColor: "rgba(255,255,255,0.25)",
  borderRadius: 16,
  alignItems: "center",
  elevation: 3,
},
day: {
  color: "#fff",
  fontWeight: "600",
  fontSize: 14,
  marginBottom: 8,
},
temp: {
  color: "#fff",
  marginTop: 8,
  fontSize: 14,
},
});
