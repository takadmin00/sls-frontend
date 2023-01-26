import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  VStack,
} from "native-base";
import React, { useState } from "react";
import { View } from "react-native";
import PhoneInput from "react-native-phone-number-input";
export default function RegisterScreen() {
  const Register = () => {
    const [userInfos, setUserInfos] = useState({
      phone: "",
      email: "",
      password: "",
    });
    console.log("userInfos", userInfos);

    return (
      <Center w="100%">
        <Box safeArea p="2" w="90%" maxW="290" py="8">
          <Heading
            size="lg"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
            fontWeight="semibold"
          >
            Bienvenue
          </Heading>
          <Heading
            mt="1"
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
            fontWeight="medium"
            size="xs"
          >
            Inscrivez-vous pour continuer !
          </Heading>
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Numéro de téléphone</FormControl.Label>

              <PhoneInput
                defaultCode="FR"
                layout="first"
                value={userInfos.phone}
                onChangeText={(text) =>
                  setUserInfos({ ...userInfos, phone: text })
                }
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                placeholder="contact@sls-beauty.fr"
                value={userInfos.email}
                onChangeText={(text) =>
                  setUserInfos({ ...userInfos, email: text })
                }
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Mot de passe</FormControl.Label>
              <Input
                type="password"
                value={userInfos.password}
                onChangeText={(text) =>
                  setUserInfos({ ...userInfos, password: text })
                }
              />
            </FormControl>

            <Button mt="2" colorScheme="indigo">
              S'inscrire
            </Button>
          </VStack>
        </Box>
      </Center>
    );
  };

  return (
    <View>
      <Register />
    </View>
  );
}
