import { default as React, useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { Icon, Input } from "react-native-elements";
import PhoneInput from "react-native-phone-number-input";

export default function RegisterScreenLon({ navigation }: any) {
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  const [userInfos, setUserInfos] = useState({
    phone: "",
    email: "",
    password: "",
  });

  const showPassword = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleRegister = () => {
    if (
      userInfos.phone === "" ||
      userInfos.email === "" ||
      userInfos.password === ""
    ) {
      Alert.alert("Attention", "Veuillez remplir tous les champs");
      return;
    } else if (userInfos.password.length < 6) {
      Alert.alert(
        "Attention",
        "Le mot de passe doit contenir au moins 6 caractères"
      );
      return;
    } else if (
      !/[A-Z]/.test(userInfos.password) ||
      !/\d/.test(userInfos.password)
    ) {
      Alert.alert(
        "Attention",
        "Le mot de passe doit contenir au moins une majuscule et un chiffre"
      );
      return;
    } else if (userInfos.phone.length < 10) {
      Alert.alert("Attention", "Le numéro de téléphone est incorrect");
      return;
    } else if (!userInfos.email.includes("@")) {
      Alert.alert("Attention", "L'email est incorrect");
      return;
    }

    fetch("http://localhost:3000/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfos),
    })
      .then((res) => res.json())
      .then((userData) => {
        console.log("userData", userData);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.logContainer}>
        <Text style={styles.logText}>Vous avez déjà utilisé SLS ?</Text>
        <Pressable style={styles.logButton}>
          <Text
            style={styles.logTextButton}
            onPress={() => navigation.navigate("Login")}
          >
            Se connecter
          </Text>
        </Pressable>
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Nouveau sur SLS ?</Text>
        <PhoneInput
          containerStyle={{
            borderColor: "grey",
            borderWidth: 1,
            height: 70,
            width: 300,
            border: "none",
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
          <Text style={styles.textLogin}>Créer mon compte</Text>
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
  // Login

  logContainer: {
    width: "100%",
    height: 150,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
  },

  logText: {
    fontSize: 15,
  },

  logButton: {
    backgroundColor: "white",
    width: 400,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
  },
  logTextButton: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  // Register
  //LOGIN CONTAINER STYLES
  registerContainer: {
    width: "100%",
    height: 320,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  registerText: {
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
