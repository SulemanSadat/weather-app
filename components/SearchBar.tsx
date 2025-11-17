import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default function SearchBar({ onSearch }: { onSearch: (q: string) => void }) {
  const [value, setValue] = useState("");

  return (
    <View style={styles.box}>
      <TextInput
        placeholder="Search city..."
        placeholderTextColor="#eee"
        value={value}
        onChangeText={setValue}
        onSubmitEditing={() => onSearch(value.trim())}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: "100%",
    marginBottom: 25,
    marginTop: 10,
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.25)",
    padding: 16,
    borderRadius: 14,
    color: "#fff",
    fontSize: 18,
    elevation: 4, // mobile-friendly shadow
  },
});