import { View, Text, StyleSheet, TextInput, Button } from "react-native";
const App = () => {
  return (
    <View
      style={styles.container}
      /*  style={{
        backgroundColor: "pink",
        textAlign: "center",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }} */
    >
      <Text style={{ fontSize: 50, color: "white" }}>Hola Mundo</Text>

      <View style={styles.inputContainer}>
        <TextInput placeholder="¿Qué estás buscando?" style={styles.input} />
        <Button
          title="Agregar"
          style={{ backgroundColor: "white", color: "black" }}
        />
      </View>
      <View style={styles.listContainer}>
        <View style={styles.cardProduct}>
          <Text>Producto 1</Text>
          <Text>$3000</Text>
          <Button title="Comprar" />
        </View>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.cardProduct}>
          <Text>Producto 2</Text>
          <Text>$3000</Text>
          <Button title="Comprar" />
        </View>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.cardProduct}>
          <Text>Producto 3</Text>
          <Text>$3000</Text>
          <Button title="Comprar" />
        </View>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.cardProduct}>
          <Text>Producto 4</Text>
          <Text>$3000</Text>
          <Button title="Comprar" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    flex: 1,
    justifyContent: "start",
    marginTop: 50,
    alignItems: "center",
  },

  inputContainer: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 200,
    marginRight: 10,
  },
  button: {
    backgroundColor: "white",
    color: "black",
  },
  listContainer: {
    backgroundColor: "white",
    width: "100%",
    marginTop: 20,
    paddingTop: 10,
    borderWidth: 1,
  },
  cardProduct: {
    margin: 10,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
});

export default App;
