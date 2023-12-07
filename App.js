import { useState } from "react";
import uuid from "react-native-uuid";
import { View, Text, StyleSheet } from "react-native";
import ModalDelete from "./src/components/ModalDelete";
import AddProduct from "./src/components/AddProduct";
import ListProduct from "./src/components/ListProduct";

const App = () => {
  const [newTitleProduct, setNewTitleProduct] = useState("");
  const [newPriceProduct, setNewPriceProduct] = useState("");
  const [products, setProducts] = useState([]);
  const [productSelected, setProductSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handlerAddProduct = () => {
    const newProduct = {
      id: uuid.v4(),
      title: newTitleProduct,
      price: newPriceProduct,
    };

    setProducts((current) => [...current, newProduct]);
    setNewTitleProduct("");
    setNewPriceProduct("");
    console.log("Se agregó nuevo producto.");
  };

  const handlerModal = (item) => {
    setProductSelected(item);
    setModalVisible(true);
    console.log("Modal ejecutado");
  };
  const handlerDeleteProduct = () => {
    setProducts((current) =>
      current.filter((product) => product.id !== productSelected.id)
    );
    setModalVisible(false);
    console.log("Producto eliminado");
  };

  const handlerCloseModal = () => {
    setModalVisible(false);
    console.log("Modal cerrado");
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50, color: "white", margin: 10 }}>
        ¡Bienvenid@!
      </Text>

      <AddProduct
        valueTitle={newTitleProduct}
        valuePrice={newPriceProduct}
        onChangeTitle={setNewTitleProduct}
        onChangePrice={setNewPriceProduct}
        addProduct={handlerAddProduct}
      />
      <View>
        <ListProduct products={products} onModal={handlerModal} />
      </View>
      <ModalDelete
        product={productSelected}
        visible={modalVisible}
        onModal={handlerModal}
        onDelete={handlerDeleteProduct}
        onClose={handlerCloseModal}
      />
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
});

export default App;
