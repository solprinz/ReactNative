import { StyleSheet, Text, View, Modal, Button, Pressable } from "react-native";
import React from "react";

const ModalDelete = ({ product, visible, onModal, onDelete }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>
            ¿Está seguro que desea eliminar el producto {product.title}?
          </Text>
          <View style={styles.modalButtons}>
            <Button title="Confirmo" onPress={onDelete} />
            <Button title="Cerrar" onPress={() => onModal(false)} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalDelete;

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
