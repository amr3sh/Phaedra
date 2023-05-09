import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import { Capture, Home, Preview, EnhancedImage, PresetApplied } from "./screens";
import SplashScreen from "react-native-splash-screen";

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"Capture"}
        >
          <Stack.Screen name="Capture" component={Capture} />
          <Stack.Screen name="Preview" component={Preview} />
          <Stack.Screen name="EnhancedImage" component={EnhancedImage} />
          <Stack.Screen name="PresetApplied" component={PresetApplied} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
