import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import CategoryCard from "../../components/cards/CategoryCard";
import ProductCard from "../../components/cards/ProductCard";
import Navbar from "../../components/navbar/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "../../hooks/reduxtoolkit/store";

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const PRODUCTS = useSelector((state: RootState) => state.app.products);
  const CATEGORIES = useSelector((state: RootState) => state.app.categories);

  const filteredProducts =
    selectedCategory === 0
      ? PRODUCTS.filter((item) => item.isBestseller)
      : PRODUCTS.filter(
          (item) => item.categoryId === selectedCategory.toString()
        );

  return (
    <View style={styles.root}>
      <Navbar />
      <View style={styles.flatlistContainer}>
        <FlatList
          data={CATEGORIES}
          renderItem={({ item }) => (
            <CategoryCard
              title={item.name}
              isSelected={selectedCategory === Number(item.id)}
              onPress={() => setSelectedCategory(Number(item.id))}
            />
          )}
          horizontal
          ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.productListContainer}>
        {filteredProducts.length > 0 ? (
          <FlatList
            data={filteredProducts}
            renderItem={({ item }) => <ProductCard {...item} />}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={styles.emptyText}>
              Bu kategoride ürün bulunmamaktadır.
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
