import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useRouter } from "expo-router";

interface Props {
  onRefresh: () => void;
}

export default function Header({ onRefresh }: Props) {
  const router = useRouter();

  return (
    <Animated.View style={styles.container} entering={FadeInDown.duration(600)}>
      <Text style={styles.title}>Weather App</Text>

      <View style={styles.actions}>
        {/* Refresh Button */}
        <TouchableOpacity onPress={onRefresh} style={styles.button}>
          <Ionicons name="refresh" size={26} color="#fff" />
        </TouchableOpacity>

      <TouchableOpacity
            onPress={() => router.navigate("/settings")}
            style={styles.button}
            >
            <Ionicons name="settings-outline" size={26} color="#fff" />
            </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 5,
    paddingBottom: 10,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    marginLeft: 16,
  },
});
