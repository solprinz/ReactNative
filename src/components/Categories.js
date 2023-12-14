import { FlatList, StyleSheet, Text, View } from "react-native";
import categories from "../data/categories.json";
import CategoryItem from "./CategoryItem";

const Categories = ({ setCategorySelected }) => {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <CategoryItem
          setCategorySelected={setCategorySelected}
          category={item}
        />
      )}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({});
