import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { colors } from "./src/global/colors";
import Navigator from "./src/navigation/Navigator";

const App = () => {
  const [fontLoaded] = useFonts({
    Playfair: require("./assets/Fonts/PlayfairDisplay-VariableFont_wght.ttf"),
  });

  if (!fontLoaded) return null;
  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle="default" />

      <Navigator />
    </>
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
