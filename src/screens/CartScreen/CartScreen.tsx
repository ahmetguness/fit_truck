import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Navbar from "../../components/navbar/Navbar";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../hooks/reduxtoolkit/store";
import { Product } from "../../models/Product";
import ProductCard from "../../components/cards/ProductCard";
import { addToCart, clearCart } from "../../hooks/reduxtoolkit/Slices/AppSlice";
import { COLORS } from "../../theme/colors";

const CartScreen = () => {
  const CART = useSelector((state: RootState) => state.app.cart);
  const PRODUCTS = useSelector((state: RootState) => state.app.products);
  const dispatch = useDispatch();

  const cartProducts: Product[] = CART.ids
    .map((id) => PRODUCTS.find((product) => product.id === id))
    .filter((product): product is Product => product !== undefined);

  return (
    <View style={styles.root}>
      <Navbar />
      {cartProducts.length <= 0 ? (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartText}>
            Sepetinizde hiçbir ürün bulunmamaktadır.
          </Text>
        </View>
      ) : (
        <View style={styles.cartContainer}>
          <View style={styles.listWrapper}>
            <FlatList
              data={cartProducts}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <ProductCard
                  {...item}
                  addCartPress={() => dispatch(addToCart(item.id))}
                  isInCart={CART.ids.includes(item.id)}
                />
              )}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              showsVerticalScrollIndicator={false}
            />
          </View>
          <View
            style={{
              flex: 0.12,
              width: "100%",
              justifyContent: "space-evenly",
            }}
          >
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <Text>
                Sepetinizde {CART.ids.length} tane ürün bulunmaktadır.
              </Text>
              <TouchableOpacity
                style={{
                  height: 40,
                  backgroundColor: "#ff4757",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                  paddingHorizontal: "5%",
                }}
                onPress={() => dispatch(clearCart())}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Sepeti Temizle
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                width: "96%",
                marginHorizontal: "2%",
                backgroundColor: COLORS.primary,
                flexDirection: "row",
                justifyContent: "space-evenly",
                borderRadius: 10,
                height: 40,
                alignItems: "center",
              }}
            >
              <Text>Sepeti Onayla</Text>
              <Text>Tutar: {CART.totalPrice}TL</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default CartScreen;
