import React, { useEffect, useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { GeneralNavigationProp } from "../../types/NavigationTypes/NavigationTypes";
import {
  fetchProducts,
  fetchCategories,
} from "../../services/firebase/firebaseServices";
import { useDispatch } from "react-redux";
import {
  setProducts,
  setCategories,
} from "../../hooks/reduxtoolkit/Slices/AppSlice";
import { COLORS } from "../../theme/colors";

const IntroScreen = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<GeneralNavigationProp>();
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(false);
    const getProductsAndCategories = async () => {
      try {
        const productsData = await fetchProducts();
        dispatch(setProducts(productsData));
        const categoriesData = await fetchCategories();
        dispatch(setCategories(categoriesData));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getProductsAndCategories();
    setLoading(true);
  }, []);

  const nextPageHandler = () => {
    navigation.navigate("BottomTab");
  };

  const title = ["Kaliteli ve Sağlıklı", "Yemek"];
  const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fuga iusto quae vitae sunt quam praesentium quibusdam dolor consequatur. Quis, ratione harum voluptas explicabo doloremque animi n architecto ea veritatis!`;
  const btnText = "Menüyü Görmek İçin Tıkla";
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

      <Text style={styles.description}>{description}</Text>

      {loading ? (
        <TouchableOpacity style={styles.textButton} onPress={nextPageHandler}>
          <Text style={styles.buttonText}>{btnText}</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.textButton}>
          <ActivityIndicator size="large" color={COLORS.background} />
        </View>
      )}
    </View>
  );
};

export default IntroScreen;
