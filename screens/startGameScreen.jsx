import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/colors";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start Game Screen</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
        />
        <View style={styles.btnContainer}>
          <View style={{ width: 80 }}>
            <Button title="Reset" color={Colors.accent} />
          </View>
          <View style={{ wdith: 80 }}>
            <Button title="confirm" color={Colors.primary} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  btnContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  input: {
    width: 50,
    textAlign: "center",
  },
});

export default StartGameScreen;
