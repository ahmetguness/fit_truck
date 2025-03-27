import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import SearchScreen from "../screens/SearchScreen/SearchScreen";
import CartScreen from "../screens/CartScreen/CartScreen";
import AntDesign from "@expo/vector-icons/AntDesign";
import { COLORS } from "../theme/colors";

const AppBottomTabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          height: "8%",
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Ana Sayfa",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          title: "Ara",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          title: "Sepetim",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="shoppingcart" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppBottomTabNavigation;
