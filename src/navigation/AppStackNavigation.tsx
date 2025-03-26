import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import IntroScreen from "../screens/IntroScreen/IntroScreen";
import MenuScreen from "../screens/MenuScreen/MenuScreen";

const AppStackNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="IntroScreen" component={IntroScreen} />
      <Stack.Screen name="MenuScreen" component={MenuScreen} />
    </Stack.Navigator>
  );
};

export default AppStackNavigation;
