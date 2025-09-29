//Task 1
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [input, setInput] = useState("");

  const handlePress = (num) => {
    setInput(input + num);
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Number Guessing Game</Text>

      {/* Display user input */}
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>{input || "Enter number"}</Text>
      </View>

      {/* Number Buttons */}
      <View style={styles.keypad}>
        {["1","2","3","4","5","6","7","8","9","0"].map((num) => (
          <TouchableOpacity
            key={num}
            style={styles.button}
            onPress={() => handlePress(num)}
          >
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
  },
  inputBox: {
    width: "80%",
    height: 60,
    borderWidth: 2,
    borderColor: "#555",
    borderRadius: 10,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  inputText: {
    fontSize: 22,
    fontWeight: "600",
    color: "#222",
  },
  keypad: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "80%",
    justifyContent: "center",
  },
  button: {
    width: "15%",
    margin: "1.5%",
    aspectRatio: 1,
    backgroundColor: "#4CAF50",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
});




