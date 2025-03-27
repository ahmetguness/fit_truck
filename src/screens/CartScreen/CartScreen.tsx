import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { styles } from "./styles";

const CartScreen = () => {
  return (
    <View style={styles.root}>
      <Navbar />
    </View>
  );
};

export default CartScreen;
