import {
  StyleSheet,
  FlatList,
  Button,
  Pressable,
  Text,
  View,
} from "react-native";
import allProducts from "../data/products.json";
import Search from "../components/Search";
import ProductItem from "../components/ProductItem";
import { colors } from "../global/colors";
import { useState, useEffect } from "react";

const ItemListCategories = ({ navigation, route }) => {
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState(allProducts);
  const { category } = route.params;

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
      <View style={styles.container}>
        <Search setKeyword={setKeyword} />
        <Pressable
          style={styles.goBack}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>VER TODAS LAS CATEGORIAS</Text>
        </Pressable>
        <FlatList
          /*  style={styles.container} */
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductItem item={item} navigation={navigation} route={route} />
          )}
        />
      </View>
    </>
  );
};

export default ItemListCategories;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: colors.background,
    color: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: colors.accent,
    textAlign: "center",
    margin: 10,
  },
  goBack: {
    fontSize: 50,
    width: "60%",
    height: 40,
    borderRadius: 10,
    margin: 10,
  },
});
