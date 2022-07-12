import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Layout, Text, Divider } from "@ui-kitten/components";
import HeaderText from "../components/HeaderText"

/**
 * THIS IS THE SCREEN SHOWN AFTER SUBMISSION
 * SCREEN NAME NOT CHANGED YET
 * ------------------------------------
 */

const ConfirmationTitle = ({ username }) => (
  <View style={styles.confirmationBox}>
    <Text style={styles.headingText}>Vote Succeeded</Text>
    <Text style={styles.normalText}>Keep updated for your tokens, {username}!</Text>
  </View>
);

const HomeButtom = ({ navigation, sum }) => (
  <TouchableOpacity
    style={styles.homeButton}
    activeOpacity={0.8}
    onPress={() => (sum == 100 ? navigation.navigate("Vote") : null)}
  >
    <Text style={styles.homeButtonText}>Back to Home</Text>
  </TouchableOpacity>
);

const SubmitScreen = ({ navigation }) => (
  <Layout style={styles.screenLayout}>
    <HeaderText text={"Voting"} />
    <ConfirmationTitle username={"username"}/>
    <HomeButtom navigation={navigation} />
  </Layout>
);


const styles = StyleSheet.create({
  flexBox: {
    width: "100%",
    alignItems: "center",
  },
  screenLayout: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  confirmationBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  headingText: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 10,
    alignItems:'center'
  },
  normalText: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 72,
    alignItems:'center',
  },
  homeButton: {
    marginTop: 35,
    width: 330,
    height: 40,
    backgroundColor: "#000000",
    borderRadius: 30,
    alignItems: "center",
  },
  homeButtonText: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 40,
    textAlign: "center",
    color: "#FFFFFF",
  },
});

export default SubmitScreen;
