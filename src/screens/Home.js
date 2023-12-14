import { StyleSheet } from "react-native";
import Header from "../components/Header";
import Categories from "../components/Categories";
import { colors } from "../global/colors";

const Home = ({ setCategorySelected }) => {
  return (
    <>
      <Header title="Categories" />
      <Categories setCategorySelected={setCategorySelected} />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: colors.background,
  },
});
