import { View } from "native-base";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Icon, Input } from "react-native-elements";
import PhoneInput from "react-native-phone-number-input";

export default function RegisterScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Vous avez déjà utilisé Sls ?</Text>
        <Pressable style={styles.buttonLogin}>
          <Text
            style={styles.textRegister}
            onPress={() => navigation.navigate("Login")}
          >
            Se connecter
          </Text>
        </Pressable>
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Vous avez déjà utilisé SLS ?</Text>
        <PhoneInput
          containerStyle={{
            borderColor: "grey",
            borderWidth: 1,
            height: 70,
            width: 300,
          }}
          defaultCode="FR"
          layout="first"
          value={userInfos.phone}
          onChangeText={(text) => setUserInfos({ ...userInfos, phone: text })}
        />
        <Input
          leftIcon={
            <Icon
              name="email"
              type="material-community"
              size={20}
              color="black"
            />
          }
          placeholder="Email"
        />

        <Input
          leftIcon={
            <Icon
              name="lock"
              type="material-community"
              size={25}
              color="black"
            />
          }
          secureTextEntry={secureTextEntry}
          placeholder="Password"
          rightIcon={
            <Icon
              name={secureTextEntry ? "eye-off-outline" : "eye-outline"}
              type="material-community"
              size={25}
              color="black"
              onPress={showPassword}
            />
          }
        />

        <Pressable style={styles.buttonLogin}>
          <Text style={styles.textLogin}>Se connecter</Text>
        </Pressable>
        <Text
          onPress={() => navigation.navigate("Forget Password")}
          style={styles.forgetPassword}
        >
          Mot de passe oublié ?
        </Text>
      </View>
      <Text style={styles.middle}> Ou </Text>
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
  middle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginTop: 20,
    marginBottom: 20,
  },

  //REGISTER CONTAINER STYLES
  loginContainer: {
    width: "100%",
    height: 150,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  loginText: {
    fontSize: 15,
  },

  buttonLogin: {
    backgroundColor: "white",
    width: 400,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
  },
  textRegister: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  //LOGIN CONTAINER STYLES
  loginContainer: {
    width: "100%",
    height: 320,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    fontSize: 20,
    // fontWeight: "bold",
    marginBottom: 20,
  },
  inputEmail: {
    backgroundColor: "white",
    width: 10,
  },
  inputPassword: {
    width: 400,
  },

  buttonLogin: {
    backgroundColor: "black",
    width: 400,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 10,
  },
  textLogin: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  forgetPassword: {
    textDecorationLine: "underline",
    marginTop: 20,
    fontSize: 15,
  },
});
