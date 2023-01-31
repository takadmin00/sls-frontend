import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

export default function TemplateScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background-screen.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        {/* Your code here */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
