import { StyleSheet, FlatList } from "react-native";
import Header from "../components/Header";
import allProducts from "../data/products.json";
import Search from "../components/Search";
import ProductItem from "../components/ProductItem";
import { colors } from "../global/colors";
import { useState, useEffect } from "react";

const ItemListCategories = ({ category }) => {
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState(allProducts);

  useEffect(() => {
    if (category) {
      const productsCategory = allProducts.filter(
        (product) => product.category === category
      );
      const productsFiltered = productsCategory.filter((product) =>
        product.title.includes(keyword)
      );
      setProducts(productsFiltered);
    } else {
      const productsFiltered = allProducts.filter((product) =>
        product.title.includes(keyword)
      );
      setProducts(productsFiltered);
    }
  }, [keyword]);

  return (
    <>
      <Header />
      <Search setKeyword={setKeyword} />
      <FlatList
        style={styles.container}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductItem item={item} />}
      />
    </>
  );
};

export default ItemListCategories;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: colors.background,
    margin: 10,
  },
});
