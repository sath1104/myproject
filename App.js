import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [name, setName] = useState();
  const [show, isShow] = useState(false);
  return (
    <View style={styles.container}>
      {show && <Text>Hello World {name} !</Text>}
      {!show && (
        <>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setName(val)}
          /> 
        </>
      )}
      <Button title="Click Here" onPress={() => isShow(!show)}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderColor: "#777",
    padding: 8,
    borderWidth: 1,
    width: 200,
    height: 30,
  },
});
