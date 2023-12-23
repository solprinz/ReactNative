import { FlatList, StyleSheet } from "react-native";
import categories from "../data/categories.json";
import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";
import { setProductsFilteredByCategory } from "../features/shop/shopSlice";

const Categories = ({ navigation, route }) => {
  const categories = useSelector((state) => state.shop.value.categories);

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <CategoryItem category={item} navigation={navigation} route={route} />
      )}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({});
