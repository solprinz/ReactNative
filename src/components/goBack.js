import { StyleSheet, Text, View } from "react-native";
import React from "react";

const goBack = () => {
  return (
    <Pressable title="Go back" onPress={() => setCategorySelected("")}>
      <Text>Volver</Text>
    </Pressable>
  );
};

export default goBack;

const styles = StyleSheet.create({});
