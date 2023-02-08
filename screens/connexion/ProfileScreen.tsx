import { Avatar } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Icon, Input } from "react-native-elements";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <View>
        <Avatar
          bg="green.500"
          size="2xl"
          marginRight={250}
          marginBottom={480}
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        ></Avatar>
      </View>
      <Input
        leftIcon={
          <Icon name="name" type="material-community" size={20} color="black" />
        }
        placeholder="Email"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0CACB",
    alignItems: "center",
    justifyContent: "center",
  },
});
