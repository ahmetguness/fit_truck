import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import IntroScreen from "../screens/IntroScreen/IntroScreen";

import AppBottomTabNavigation from "./AppBottomTabNavigation";

const AppStackNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="IntroScreen" component={IntroScreen} />

      <Stack.Screen name="BottomTab" component={AppBottomTabNavigation} />
    </Stack.Navigator>
  );
};

export default AppStackNavigation;
