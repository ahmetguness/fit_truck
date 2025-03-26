import React from "react";
import { View, ImageBackground, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { GeneralNavigationProp } from "../../types/NavigationTypes/NavigationTypes";

const IntroScreen = () => {
  const navigation = useNavigation<GeneralNavigationProp>();
  const nextPageHandler = () => {
    navigation.navigate("MenuScreen");
  };
  return (
    <View style={styles.root}>
      <View style={styles.appIconContainer}>
        <ImageBackground
          style={styles.appIcon}
          source={require("../../assets/app/AppIcon.png")}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Kaliteli ve Sağlıklı</Text>
        <Text style={styles.text}>Yemek</Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          fuga iusto quae vitae sunt quam praesentium quibusdam dolor
          consequatur. Quis, ratione harum voluptas explicabo doloremque animi
          in architecto ea veritatis!
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={styles.textButton}
          onPress={() => nextPageHandler()}
        >
          <Text style={styles.buttonText}>Menüyü Görmek İçin Tıkla</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IntroScreen;
