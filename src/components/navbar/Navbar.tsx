import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../theme/colors";
import { APP_NAME } from "../../data/appData";

const Navbar = () => {
  return (
    <View style={styles.navbarContainer}>
      <Text style={styles.navbarTitle}>{APP_NAME}</Text>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbarContainer: {
    width: "100%",
    height: "8%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
  },
  navbarTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.background,
  },
});
