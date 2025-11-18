import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";


if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function Settings() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpen(!open);
  };

  return (
    <View style={styles.container}>
   
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => router.push("/")}
      >
        <Ionicons name="home-outline" size={28} color="#fff" />
        <Text style={styles.homeText}>Home</Text>
      </TouchableOpacity>

    
      <Animated.Text entering={FadeInDown.duration(600)} style={styles.title}>
        Settings
      </Animated.Text>

 
      <View style={styles.card}>
        <TouchableOpacity style={styles.dropdownHeader} onPress={toggle}>
          <Text style={styles.dropdownTitle}>About this app</Text>
          <Ionicons
            name={open ? "chevron-up-outline" : "chevron-down-outline"}
            size={24}
            color="#fff"
          />
        </TouchableOpacity>

        {open && (
          <Animated.View entering={FadeInDown.duration(500)}>
            <Text style={styles.dropdownContent}>
              A fast, modern Weather App delivering real-time forecasts and a
              premium mobile experience.{"\n"}
              Powered by WeatherAPI.com.{"\n"}
              Developed by Suleman Sadat using React Native + Expo.
            </Text>
          </Animated.View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1e",
    paddingTop: 80,
    paddingHorizontal: 20,
  },


  homeButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  homeText: {
    color: "#fff",
    fontSize: 20,
    marginLeft: 8,
    fontWeight: "600",
  },


  title: {
    fontSize: 34,
    fontWeight: "800",
    color: "#fff",
    marginBottom: 30,
  },


  card: {
    backgroundColor: "rgba(255,255,255,0.08)",
    padding: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",


    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,

    // Shadow (Android)
    elevation: 6,
  },

  dropdownHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  dropdownTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },

  dropdownContent: {
    marginTop: 12,
    color: "#ccc",
    fontSize: 16,
    lineHeight: 22,
  },
});
