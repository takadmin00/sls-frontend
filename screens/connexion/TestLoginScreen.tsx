import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Input,
  Link,
  Text,
  View,
  VStack,
} from "native-base";

import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

export default function LoginScreen({ navigation }: any) {
  const LoginForms = () => {
    const ForgetPassword = () => {
      navigation.navigate("Forget Password");
    };
    const Register = () => {
      navigation.navigate("Register");
    };

    return (
      <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
          >
            Bienvenue
          </Heading>
          <Heading
            mt="1"
            _dark={{
              color: "warmGray.200",
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs"
          >
            Connectez-vous pour continuer !
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Mot de passe</FormControl.Label>
              <Input type="password" />
              <Link
                _text={{
                  fontSize: "xs",
                  fontWeight: "500",
                  color: "indigo.500",
                }}
                alignSelf="flex-end"
                mt="1"
                onPress={() => ForgetPassword()}
              >
                Mot de passe oublié ?
              </Link>
            </FormControl>
            <Button mt="2" colorScheme="indigo">
              Se connecter
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                Nouveau sur Sls Beauty ?{" "}
              </Text>
              <Link
                _text={{
                  color: "indigo.500",
                  fontWeight: "medium",
                  fontSize: "sm",
                }}
                href="#"
                onPress={() => Register()}
              >
                S'inscrire
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/background-screen.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <LoginForms />
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
