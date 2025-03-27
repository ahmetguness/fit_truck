import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { CATEGORIES, PRODUCTS } from "../../data/data";
import CategoryCard from "../../components/cards/CategoryCard";
import ProductCard from "../../components/cards/ProductCard";

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  return (
    <View style={styles.root}>
      <View style={styles.navbarContainer}>
        <Text style={styles.navbarTitle}>Fit Truck</Text>
      </View>
      <View style={styles.flatlistContainer}>
        <FlatList
          data={CATEGORIES}
          renderItem={({ item }) => (
            <CategoryCard
              title={item.name}
              isSelected={selectedCategory === item.id ? true : false}
              onPress={() => setSelectedCategory(item.id)}
            />
          )}
          horizontal
          ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.productListContainer}>
        <FlatList
          data={PRODUCTS}
          renderItem={({ item }) => (
            <ProductCard
              id={item.id}
              categoryId={item.categoryId}
              name={item.name}
              price={item.price}
              image={item.image}
              description={item.description}
              ingredients={item.ingredients}
              isBestseller={item.isBestseller}
            />
          )}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
