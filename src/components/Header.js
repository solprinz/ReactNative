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
    justifyContent: "start",
    alignItems: "center",
    borderBottom: 1,
  },
  title: {
    fontSize: 17,
  },
});
