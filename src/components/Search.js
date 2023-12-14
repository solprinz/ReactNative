import { StyleSheet, View, TextInput, Pressable, Text } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { colors } from "../global/colors";
import { useState } from "react";

const Search = ({ setKeyword }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const seach = () => {
    const expression = /.*[0-9].*/;
    if (expression.test(input)) {
      setError("No debe contener numeros");
    } else {
      setKeyword(input);
    }
  };
  const removeItem = () => {
    setInput("");
    setError("");
  };
  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Buscar producto"
          value={input}
          onChangeText={(t) => setInput(t)}
        />
        <Pressable style={styles.button} onPress={seach}>
          <AntDesign name="search1" color={colors.accent} size={25} />
        </Pressable>
        <Pressable style={styles.button} onPress={removeItem}>
          <Entypo name="circle-with-cross" color={colors.accent} size={25} />
        </Pressable>
      </View>
      {error ? <Text style={styles.errorInput}>{error}</Text> : null}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    /*     flex: 1, */
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignItems: "center",
    /*    backgroundColor: colors.accent, */
  },
  input: {
    width: 250,
    height: 40,
    backgroundColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 20,
  },
  button: {
    margin: 10,
  },
  errorInput: {
    color: "red",
    paddingHorizontal: 10,
  },
});
