import { NavigationProp } from "@react-navigation/native";

export type RootStackParamList = {
  IntroScreen: undefined;
  BottomTab: undefined;
};

export type BottomTabParamList = {
  HomeScreen: undefined;
  SearchScreen: undefined;
  CartScreen: undefined;
};

export type GeneralNavigationProp = NavigationProp<RootStackParamList>;
export type BottomTabNavigationProp = NavigationProp<BottomTabParamList>;
