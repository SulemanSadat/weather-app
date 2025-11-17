import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  message: string;
}

export default function ErrorMessage({ message }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { color: "red", fontSize: 18 },
});
