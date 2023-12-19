import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";
import CardShadow from "../Wrapper/CardShadow";

const CategoryItem = ({ category, navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Pressable
          onPress={() => navigation.navigate("Category", { category })}
        >
          <Text style={styles.text}>{category}</Text>
        </Pressable>
      </View>
    </>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    marginTop: 40,
    width: "80%",
    height: 60,
    borderRadius: 20,
    elevation: 10, //solo para Android
    marginHorizontal: "10%",
    margin: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    /*     backgroundColor: "red", */
  },
  text: {
    color: colors.secondary,
  },
});
