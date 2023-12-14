import { StyleSheet, Text, View, Modal, Button } from "react-native";

const ModalDelete = ({ product, visible, onModal, onDelete, onClose }) => {
  return (
    <Modal style={styles.modal} visible={visible} transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Eliminar producto</Text>
          <Text style={styles.modalText}>
            ¿Esta seguro que quiere eliminar el producto {product.title}? Esa
            acción es irreversible
          </Text>
          <View style={styles.modalButtons}>
            <Button title="Cancelar" onPress={onClose} />
            <Button title="Eliminar" color="red" onPress={onDelete} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "rgba(255,255,255, 0.95)",
    height: 180,
    borderRadius: 15,
  },
  modalText: {
    textAlign: "center",
    marginBottom: 10,
    padding: 10,
    fontSize: 15,
  },
  modalTitle: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default ModalDelete;
