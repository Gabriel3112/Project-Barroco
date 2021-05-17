import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
});
