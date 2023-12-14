import { StyleSheet, View } from "react-native";

const CardShadow = ({ children, style }) => {
  return <View style={{ ...styles.container, ...style }}>{children}</View>;
};

export default CardShadow;

const styles = StyleSheet.create({
  container: {
    elevation: 10, //solo para Android
    shadowColor: "black",
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 1,
    shadowOpacity: 1.1, //iOs
  },
});
