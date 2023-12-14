import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";

const ProductItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: item.thumbnail }}
      />
      <Text style={styles.title}></Text>
      <Text style={styles.item}>{item.title}</Text>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: colors.primary,
    margin: 10,
  },
  item: {
    /*     backgroundColor: colors.primary, */
    width: "80%",
    margin: 5,
    textAlign: "center",
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    margin: 5,
  },
});
