import React from "react";
import { View, ImageBackground, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { GeneralNavigationProp } from "../../types/NavigationTypes/NavigationTypes";

const IntroScreen = () => {
  const navigation = useNavigation<GeneralNavigationProp>();

  const nextPageHandler = () => {
    navigation.navigate("BottomTab");
  };
  const title = ["Kaliteli ve Sağlıklı", "Yemek"];
  const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fuga iusto quae vitae sunt quam praesentium quibusdam dolor consequatur. Quis, ratione harum voluptas explicabo doloremque animi n architecto ea veritatis!`;
  return (
    <View style={styles.root}>
      <View style={styles.appIconContainer}>
        <ImageBackground
          style={styles.appIcon}
          source={require("../../assets/app/AppIcon.png")}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title[0]}</Text>
        <Text style={styles.title}>{title[1]}</Text>
      </View>

      <Text style={styles.description}>
        {description}
      </Text>

      <TouchableOpacity style={styles.textButton} onPress={nextPageHandler}>
        <Text style={styles.buttonText}>Menüyü Görmek İçin Tıkla</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IntroScreen;
