import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <View style={styles.logoContainer}>
        <MaterialCommunityIcons
          name="human-greeting-proximity"
          size={150}
          color="black"
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Liste Contact")}
        >
          <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  logoContainer: {
    backgroundColor: "#F5FCFF",
    alignItems: "center",
    paddingBottom: 100,
    paddingTop: 50,
  },
  login: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
  input: {
    height: 50,
    width: 200,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 18,
    padding: 10,
    margin: 10,
  },
  button: {
    width: 150,
    height: 50,
    borderWidth: 1,
    borderRadius: 19,
    marginTop: 10,
    borderColor: "blue",
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
});
