import { StyleSheet, FlatList, Pressable, Text, View } from "react-native";
import Search from "../components/Search";
import ProductItem from "../components/ProductItem";
import { colors } from "../global/colors";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const ItemListCategories = ({ navigation, route }) => {
  const productsFilteredByCategory = useSelector(
    (state) => state.shop.value.productsFilteredByCategory
  );
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState(productsFilteredByCategory);

  useEffect(() => {
    const productsFiltered = productsFilteredByCategory.filter((product) =>
      product.title.includes(keyword)
    );
    setProducts(productsFiltered);
  }, [keyword, productsFilteredByCategory]);

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
