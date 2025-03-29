import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Product } from "../../models/Product";
import { COLORS } from "../../theme/colors";

interface ProductCardProps extends Product {
  addCartPress: () => void;
  isInCart: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  description,
  image,
  ingredients,
  isBestseller,
  addCartPress,
  isInCart,
}) => {
  const cartText = isInCart ? "Sepetten Çıkar" : "Sepete Ekle";
  return (
    <View style={styles.card}>
      {isBestseller && (
        <View style={styles.bestsellerBadge}>
          <Text style={styles.bestsellerText}>🔥 Çok Satan</Text>
        </View>
      )}
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
          {description}
        </Text>
        <Text style={styles.ingredientsTitle}>🥗 İçindekiler:</Text>
        <Text style={styles.ingredients} numberOfLines={1} ellipsizeMode="tail">
          {ingredients}
        </Text>
        <View style={styles.footer}>
          <Text style={styles.price}>₺{price.toFixed(2)}</Text>
          <TouchableOpacity onPress={addCartPress} activeOpacity={0.7}>
            <Text style={styles.orderButton}>🛒 {cartText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.background,
    borderRadius: 15,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    marginBottom: 15,
  },
  bestsellerBadge: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#ff4757",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
    zIndex: 1,
  },
  bestsellerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 15,
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.text,
  },
  description: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginVertical: 6,
  },
  ingredientsTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 6,
    color: "#2f3542",
  },
  ingredients: {
    fontSize: 13,
    color: COLORS.textSecondary,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    // color: "#ff4757",
    color: COLORS.primary,
  },
  orderButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    // backgroundColor: "#1e90ff",
    backgroundColor: COLORS.primary,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    overflow: "hidden",
  },
});
