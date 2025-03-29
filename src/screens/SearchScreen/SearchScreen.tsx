import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, FlatList } from "react-native";
import Navbar from "../../components/navbar/Navbar";
import { styles } from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import { COLORS } from "../../theme/colors";
import ProductCard from "../../components/cards/ProductCard";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../hooks/reduxtoolkit/store";
import { addToCart } from "../../hooks/reduxtoolkit/Slices/AppSlice";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const PRODUCTS = useSelector((state: RootState) => state.app.products);
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);
  const CART = useSelector((state: RootState) => state.app.cart);
  const dispatch = useDispatch();

  const searchProducts = (query: string) => {
    if (query === "") {
      setFilteredProducts(PRODUCTS);
    } else {
      const lowercasedQuery = query.toLowerCase();
      const results = PRODUCTS.filter(
        (product) =>
          product.name.toLowerCase().includes(lowercasedQuery) ||
          product.description.toLowerCase().includes(lowercasedQuery) ||
          product.ingredients.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredProducts(results);
    }
  };

  return (
    <View style={styles.root}>
      <Navbar />
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBarTextInput}
          placeholder="Yemek ara"
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={(text) => {
            setSearchQuery(text);
            searchProducts(text);
          }}
        />
        <TouchableOpacity
          style={styles.searchIconContainer}
          onPress={() => {
            setSearchQuery("");
            setFilteredProducts(PRODUCTS);
          }}
        >
          {searchQuery.length <= 0 ? (
            <AntDesign name="search1" size={30} color={COLORS.primary} />
          ) : (
            <FontAwesome6 name="delete-left" size={30} color={COLORS.primary} />
          )}
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <ProductCard
            {...item}
            addCartPress={() => dispatch(addToCart(item.id))}
            isInCart={CART.ids.includes(item.id) ? true : false}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.productList}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />
    </View>
  );
};

export default SearchScreen;
