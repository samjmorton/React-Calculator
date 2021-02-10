import React from "react";
import { Text, View } from "react-native";
import styles from './Header.styles';

export default Header = ({ value }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{value}</Text>
  </View>
);
