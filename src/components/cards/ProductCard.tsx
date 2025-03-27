import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Product } from "../../models/Product";

const ProductCard: React.FC<Product> = ({
  id,
  categoryId,
  name,
  price,
  description,
  image,
  ingredients,
  isBestseller,
}) => {
  return (
    <View style={styles.root}>
      <View
        style={{ width: "50%", alignItems: "center", justifyContent: "center" }}
      >
        <Image source={{ uri: image }} style={{ width: 180, height: 180 }} />
      </View>
      <View style={{ width: "50%" }}>
        <Text>{name}</Text>
        <Text>{description}</Text>
        <Text>{ingredients}</Text>
        <Text>{isBestseller}</Text>
        <Text>{price}</Text>
        <Text>{id}</Text>
        <Text>{categoryId}</Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "25%",
    flexDirection: "row",
  },
});
