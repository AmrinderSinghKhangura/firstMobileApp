import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";

const form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLoginButton() {
    if (username === "" || password === "") {
      alert("Please fill in all fields");
      return;
    }
    if (username === "m" && password === "h") {
      router.push("(tabs)");
    } else {
      console.log(username, password);
      alert("Invalid username or password");
    }
  }

  return (
    <View style={styles.login}>
      <Text style={styles.logo}>Logo</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Pressable onPress={handleLoginButton}>
        <Text style={styles.button}>Login</Text>
      </Pressable>
    </View>
  );
};

export default form;

const styles = StyleSheet.create({
  login: {
    backgroundColor: "green",
    height: "100%",
    padding: 50,
    alignItems: "center",
  },
  logo: {
    fontSize: 50,
    marginBottom: 50,
    borderWidth: 1,
    borderColor: "black",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
    marginBottom: 20,
    fontSize: 40,
  },
  button: {
    fontSize: 30,
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 50,
    borderRadius: 20,
  },
});
