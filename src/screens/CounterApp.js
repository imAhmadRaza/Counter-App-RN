import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.counterText}>{counter}</Text>
      </View>
      <View style={styles.buttonsGroup}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            setCounter(counter + 1);
          }}
        >
          <Text style={styles.commonStyle}>+ 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            setCounter(0);
          }}
        >
          <Text style={styles.commonStyle}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            if (counter > 0) {
              setCounter(counter - 1);
            }
          }}
        >
          <Text style={styles.commonStyle}>- 1</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  counterText: {
    fontSize: 70,
    marginTop: 110,
  },
  buttonStyle: {
    backgroundColor: "black",
    width: 180,
    height: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 30,
  },
  commonStyle: {
    color: "white",
    fontSize: 32,
  },
});

export default CounterApp;
