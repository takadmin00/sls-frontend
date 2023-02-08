//React Native

// Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import React, { useEffect, useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CalendarScreen from "./screens/tabNavigator/CalendarScreen";

// Screens
import ForgetPasswordScreen from "./screens/connexion/ForgetPasswordScreen";
import LoginScreen2 from "./screens/connexion/LoginScreen";
import ProfileScreen from "./screens/connexion/ProfileScreen";
import RegisterScreenLon from "./screens/connexion/RegisterScreen";
import HomeScreen from "./screens/tabNavigator/HomeScreen";
import MapScreen from "./screens/tabNavigator/MapScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  if (isLoading) {
    return <WelcomeScreen />;
  }
  const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName = "";

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Profile") {
              iconName = "user";
            } else if (route.name === "Map") {
              iconName = "globe";
            } else if (route.name === "Calendar") {
              iconName = "calendar";
            }

            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "black",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Login"
            component={LoginScreen2}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Inscription"
            component={RegisterScreenLon}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Mot de passe oublié"
            component={ForgetPasswordScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="TabNavigator"
            component={TabNavigator}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
