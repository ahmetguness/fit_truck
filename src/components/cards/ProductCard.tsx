import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Product } from "../../models/Product";
import { COLORS } from "../../theme/colors";

interface ProductCardProps extends Product {
  addCartPress: () => void;
  isInCart: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  ingredients,
  isBestseller,
  addCartPress,
  isInCart,
}) => {
  const cartText = isInCart ? "Sepetten Çıkar" : "Sepete Ekle";

  const buttonStyles = {
    backgroundColor: isInCart ? "#f8f9fa" : COLORS.primary,
    borderColor: isInCart ? COLORS.secondary : COLORS.primary,
  };

  const textStyles = {
    color: isInCart ? COLORS.secondary : "white",
  };

  return (
    <View style={styles.card}>
      {isBestseller && (
        <View style={styles.bestsellerBadge}>
          <Text style={styles.bestsellerText}>🔥 Çok Satan</Text>
        </View>
      )}

      <View style={styles.cardContent}>
        <Text style={styles.name} numberOfLines={2}>{name}</Text>

        <View style={styles.ingredientsBox}>
          <Text style={styles.ingredientsTitle}>🥗 İçindekiler</Text>
          <Text style={styles.ingredients}>{ingredients}</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.price}>₺{price.toFixed(2)}</Text>
          <TouchableOpacity
            onPress={addCartPress}
            activeOpacity={0.8}
            style={[styles.button, buttonStyles]}
          >
            <Text style={[styles.buttonText, textStyles]}>{cartText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
    overflow: "hidden",
    position: "relative", // badge için gerekli
  },
  cardContent: {
    padding: 20,
  },
  bestsellerBadge: {
    position: "absolute",
    top: 15,
    right: 15,
    backgroundColor: COLORS.accent,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
    zIndex: 10,
  },
  bestsellerText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.textDark,
    marginBottom: 12,
    paddingRight: 100, // Badge çakışmasını engeller
  },
  ingredientsBox: {
    backgroundColor: "#f8f9fa",
    padding: 14,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e9ecef",
  },
  ingredientsTitle: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 6,
    color: COLORS.textDark,
  },
  ingredients: {
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.textSecondary,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  price: {
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.primaryDark,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    minWidth: 120,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "600",
  },
});
