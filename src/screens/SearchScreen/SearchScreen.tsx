import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, FlatList } from "react-native";
import Navbar from "../../components/navbar/Navbar";
import { styles } from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import { COLORS } from "../../theme/colors";
import { PRODUCTS } from "../../data/data";
import ProductCard from "../../components/cards/ProductCard";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

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
        <TouchableOpacity style={styles.searchIconContainer}>
          <AntDesign name="search1" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => <ProductCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.productList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SearchScreen;
