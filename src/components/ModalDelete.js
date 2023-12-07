import { StyleSheet, Text, View, Modal, Button } from "react-native";

const ModalDelete = ({ product, visible, onModal, onDelete, onClose }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>
            ¿Esta seguro que quiere borrar el producto {product.title}?
          </Text>
          <View style={styles.modalButtons}>
            <Button title="Confirmo" onPress={onDelete} />
            <Button title="Cerrar" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "pink",
    flex: 1,
    justifyContent: "center",
    marginTop: 50,
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    height: 180,
    borderRadius: 15,
  },
  modalText: {
    textAlign: "center",
    margin: 10,
    padding: 10,
    fontSize: 20,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default ModalDelete;
