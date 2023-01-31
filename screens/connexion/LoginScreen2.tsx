import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Icon, Input } from "react-native-elements";

export default function LoginScreen2({ navigation }: any) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const showPassword = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleLogin = () => {
    console.log("login");
    navigation.navigate("TabNavigator");
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Vous avez déjà utilisé SLS ?</Text>

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
          <Text onPress={() => handleLogin()} style={styles.textLogin}>
            Se connecter
          </Text>
        </Pressable>
        <Text
          onPress={() => navigation.navigate("Forget Password")}
          style={styles.forgetPassword}
        >
          Mot de passe oublié ?
        </Text>
      </View>
      <Text style={styles.middle}>Ou</Text>
      <View style={styles.registerContainer}>
        <Text style={styles.newRegister}>Pas encore de compte ?</Text>
        <Pressable style={styles.buttonRegister}>
          <Text
            style={styles.textRegister}
            onPress={() => navigation.navigate("Register")}
          >
            S'inscrire
          </Text>
        </Pressable>
      </View>
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
    marginTop: 20,
    marginBottom: 20,
    fontSize: 15,
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
  //REGISTER CONTAINER STYLES
  registerContainer: {
    width: "100%",
    height: 150,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  newRegister: {
    fontSize: 15,
  },

  buttonRegister: {
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
});
