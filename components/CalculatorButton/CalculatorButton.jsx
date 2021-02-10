import React from "react";
import { Text, TouchableHighlight } from "react-native";
import styles from './CalculatorButton.styles';

export default ({ value, onPress, backgroundColor }) => (
  <TouchableHighlight
    style={[styles.button, { backgroundColor }]}
    onPress={() => onPress(value)}
  >
    <Text styles={styles.buttonText}>{value}</Text>
  </TouchableHighlight>
);




