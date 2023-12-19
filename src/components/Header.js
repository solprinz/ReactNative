import { StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 88,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: 1,
    borderBottomColor: "#999999",
    borderBottomWidth: 1,
    /*  backgroundColor: "#F5F5F5", */
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 17,
    color: colors.secondary,
    marginTop: 30,
  },
});
