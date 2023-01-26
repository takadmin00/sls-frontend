import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  VStack,
} from "native-base";
import React from "react";
import { View } from "react-native";

export default function ForgetPasswordScreen() {
  const ForgetPassword = () => {
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
            Mot de passe oublié ?
          </Heading>
          <Heading
            mt="5"
            _dark={{
              color: "warmGray.200",
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs"
          >
            Veuillez saisir l’adresse e-mail associée à votre compte. Cliquez le
            lien qui vous est adressé et choisissez un nouveau mot de passe.
          </Heading>

          <VStack space={3} mt="12">
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
            <Button mt="2" colorScheme="indigo">
              REINITIALISER MOT DE PASSE
            </Button>
          </VStack>
        </Box>
      </Center>
    );
  };
  return (
    <View>
      <ForgetPassword />
    </View>
  );
}
