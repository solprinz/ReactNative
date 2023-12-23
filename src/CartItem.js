import { Pressable, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { colors } from "./global/colors";

const CartItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text>{item.brand}</Text>
        <Text>{item.title}</Text>
        <Text>${item.price}</Text>
      </View>
      <Entypo name="trash" size={30} color="black" />
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    backgroundColor: colors.accent,
    margin: 10,
    padding: 20,
    borderWidth: 0.5,
  },
  textContainer: {
    gap: 5,
    width: "70%",
  },
});
