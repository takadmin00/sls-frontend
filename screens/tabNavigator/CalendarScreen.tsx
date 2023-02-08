import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CalendarScreen: any = () => {
  return (
    <View style={styles.container}>
      <Text>CalendarScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0CACB",
    alignItems: "center",
    justifyContent: "center",
  },
  calendar: {
    height: 20,
    width: 30,
  },
});

export default CalendarScreen;
