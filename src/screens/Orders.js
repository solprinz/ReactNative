import { FlatList, StyleSheet, View, Text } from "react-native";
import allOrders from "../data/orders.json";
import OrderItem from "../components/OrderItem";
import Counter from "../components/Counter";

const Orders = () => {
  return (
    <>
      <FlatList
        data={allOrders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderItem order={item} />}
      />
    </>
  );
};

export default Orders;

const styles = StyleSheet.create({});
