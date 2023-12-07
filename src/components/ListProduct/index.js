import { StyleSheet, View, FlatList } from "react-native";
import CardProduct from "./cardProduct";

const ListProduct = ({ products, onModal }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardProduct item={item} onModal={onModal} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    marginTop: 20,
    paddingTop: 10,
  },
});

export default ListProduct;
