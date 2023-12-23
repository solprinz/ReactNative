import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const OrderItem = ({ order }) => {
  const total = order.items.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  return (
    <View>
      <View>
        <Text>{new Date(order.createdAt).toLocaleString()}</Text>
        <Text>Numero de orden: {order.id}</Text>
        <Text>Total: ${total}</Text>
      </View>
      <Feather name="search" size={25} color="red" />
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({});
