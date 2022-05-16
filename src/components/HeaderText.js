import React from "react";
import { StyleSheet, ScrollView, TouchableOpacity, View } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

const HeaderText = ({ text }) => <Text style={styles.headerText}>{text}</Text>;

const styles = StyleSheet.create({
  headerText: {
    marginTop: 44,
    marginBottom: 10,
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 56,
    textAlign: "center",
    letterSpacing: "-0.022em",
    color: "#000000",
  },
});

export default HeaderText;
