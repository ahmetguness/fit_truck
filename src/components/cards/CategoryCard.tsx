import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../theme/colors";

interface CategoryCardProps {
  title: string;
  onPress: () => void;
  isSelected?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  onPress,
  isSelected = false,
}) => {
  return (
    <TouchableOpacity
      style={
        isSelected
          ? [styles.root, { backgroundColor: COLORS.background }]
          : styles.root
      }
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  root: {
    height: 40,
    width: 100,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: COLORS.primary,
  },
});
