import { StyleSheet, View, FlatList, Text } from "react-native";
import React from "react";
import CardProduct from "./cardProduct";

const ListProduct = ({ products, handlerModal }) => {
  return (
    <View>
      <View style={styles.listContainer}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardProduct handlerModal={handlerModal} item={item} />
          )}
        ></FlatList>
      </View>
    </View>
  );
};

export default ListProduct;

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    marginTop: 20,
    paddingTop: 10,
  },
});
