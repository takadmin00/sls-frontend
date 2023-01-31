import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DatePicker from "react-native-styled-datepicker";

const CalendarScreen: any = () => {
  return (
    <View style={styles.container}>
      <Text>CalendarScreen</Text>
      <DatePicker />
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
