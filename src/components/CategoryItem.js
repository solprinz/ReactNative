import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../global/colors";
import CardShadow from "../Wrapper/CardShadow";

const CategoryItem = ({ category, setCategorySelected }) => {
  return (
    <Pressable onPress={() => setCategorySelected(category)}>
      <CardShadow style={styles.container}>
        <Text style={styles.text}>{category}</Text>
      </CardShadow>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    margin: 5,
    width: 200,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10, //solo para Android
    shadowColor: "black",
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 1,
    shadowOpacity: 1.1, //iOs
  },
});
