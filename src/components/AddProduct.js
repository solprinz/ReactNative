import { StyleSheet, TextInput, Button, View, Text } from "react-native";

const AddProduct = ({
  valueTitle,
  valuePrice,
  onChangeTitle,
  onChangePrice,
  addProduct,
}) => {
  return (
    <View>
      <Text style={styles.title}>Agregar nuevo producto:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Nombre"
          style={styles.input}
          onChangeText={(t) => onChangeTitle(t)}
          value={valueTitle}
        />
        <TextInput
          placeholder="Precio"
          style={styles.input}
          onChangeText={(t) => onChangePrice(t)}
          value={valuePrice}
        />
        <Button title="Agregar" onPress={addProduct} />
      </View>
    </View>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    margin: 10,
  },
  title: {
    flexDirection: "column",
    marginLeft: 10,
    fontSize: 15,
  },
  input: {
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 130,
    marginRight: 10,
    marginLeft: 10,
  },
});
