import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import allCart from "../data/cart.json";
import { useState, useEffect } from "react";
import CartItem from "../CartItem";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCart(allCart);
  }, []);
  useEffect(() => {
    const total = cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setTotal(total);
  }, [cart]);
  return (
    <View>
      <FlatList
        data={allCart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartItem item={item} />}
      />
      <View style={styles.confirmContainer}>
        <Pressable>
          <Text>Confirmar</Text>
        </Pressable>
        <Text>Total: ${total}</Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  confirmContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30,
  },
});
