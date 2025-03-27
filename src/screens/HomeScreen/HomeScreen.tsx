import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";

const HomeScreen = () => {
    return (
        <View style={styles.root}>
            <View style={styles.navbarContainer}>
                <Text style={styles.navbarTitle}>Fit Truck</Text>
            </View>
        </View>
    );
};

export default HomeScreen;
