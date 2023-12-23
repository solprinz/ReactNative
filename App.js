import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { colors } from "./src/global/colors";
import TabNavigator from "./src/navigation/TabNavigator";
import { store } from "./src/app/store";
import { Provider } from "react-redux";

const App = () => {
  const [fontLoaded] = useFonts({
    Playfair: require("./assets/Fonts/PlayfairDisplay-VariableFont_wght.ttf"),
  });

  if (!fontLoaded) return null;

  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle="default" />
      <Provider store={store}>
        <TabNavigator />
      </Provider>
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
