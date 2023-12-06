import { useState } from "react";
import uuid from "react-native-uuid";
import { View, Text, StyleSheet } from "react-native";
import ModalDelete from "./src/components/ModalDelete";
import AddProduct from "./src/components/AddProduct";
import ListProduct from "./src/components/ListProduct";

const App = () => {
  const [newTitleProduct, setNewTitleProduct] = useState("");
  const [newPriceProduct, setNewPriceProduct] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [productSelected, setProductSelected] = useState({});
  /* array de productos */
  const [products, setProducts] = useState([]);

  const handlerAddProduct = () => {
    const newProduct = {
      id: uuid.v4(),
      title: newTitleProduct,
      price: newPriceProduct,
    };
    setProducts((current) => [...current, newProduct]),
      /* limpiar */
      setNewTitleProduct("");
    setNewPriceProduct("");
  };

  const handlerModal = (item) => {
    setProductSelected(item);
    setModalVisible(true);
  };

  const handlerDeleteProduct = () => {
    /* filtra los productos y deja solamente los productos que el id sea diferente a ese ID */
    setProducts((current) =>
      current.filter((product) => product.id !== productSelected.id)
    );
    setModalVisible(false);
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
        <ListProduct products={products} handlerModal={handlerModal} />
      </View>
      <ModalDelete
        product={productSelected}
        visible={modalVisible}
        onModal={handlerModal}
        onDelete={handlerDeleteProduct}
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
