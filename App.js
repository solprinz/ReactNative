import { View, Text, StyleSheet } from "react-native";
import Home from "./src/screens/Home";
import ItemListCategories from "./src/screens/ItemListCategories";
import { useFonts } from "expo-font";
import { useState } from "react";

const App = () => {
  const [categorySelected, setCategorySelected] = useState("");

  const [fontLoaded] = useFonts({
    Playfair: require("./assets/Fonts/PlayfairDisplay-VariableFont_wght.ttf"),
  });

  if (!fontLoaded) return null;
  return (
    <View style={styles.container}>
      {categorySelected ? (
        <ItemListCategories category={categorySelected} />
      ) : (
        <Home setCategorySelected={setCategorySelected} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "",
    flex: 1,
    justifyContent: "start",
    marginTop: 50,
    alignItems: "center",
    fontFamily: "Playfair",
  },
});

export default App;
