import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const SignupScreen = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.login}>Sign Up</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            textContentType="emailAddress"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.btnContainer}>
          <Button
            title="Sign Up"
            onPress={() =>
              console.log(
                `Name = ${name}, Email = ${email}, Password = ${password}`
              )
            }
          />
        </View>
        <Text style={{ fontSize: 12, alignSelf: "center", marginTop: 20 }}>
          If you have already an account,{" "}
          <Text
            onPress={() => props.navigation.navigate("Login")}
            style={{
              fontSize: 14,
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "#5193ff",
            }}
          >
            Log In
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#232B2B",
  },
  login: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  card: {
    width: "90%",
    height: 400,
    backgroundColor: "#fff",
    elevation: 3,
    borderRadius: 10,
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 200,
    marginTop: 10,
  },
  input: {
    width: "90%",
    margin: 18,
    height: 42,
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    borderRadius: 50
  },
  btnContainer: {
    width: "90%",
    alignSelf: "center",
  },
});
