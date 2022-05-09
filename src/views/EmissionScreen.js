import React from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
// import CarbonMap from "../components/CarbonMap";
import { View } from "react-native-web";

const VotingItem = ({ index, title }) => (
  <View style={styles.votingBox}>
    <Text style={styles.votingText}>
      {index}. {title}
    </Text>
    <TextInput style={styles.votingInput} maxLength={2} />
  </View>
);

const VotingButtom = () => (
  <TouchableOpacity style={styles.submitButton} activeOpacity={0.8}>
    <Text style={styles.submitButtonText}>Submit</Text>
  </TouchableOpacity>
);

const EmissionScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">EmissionScreen2</Text>
    <VotingItem index={1} title={"Personal Carbon Credit"} />
    <VotingItem index={2} title={"Personal Improvement"} />
    <VotingItem index={3} title={"Among All Participants"} />
    <VotingItem index={4} title={"Among Profile"} />
    <VotingButtom />
  </Layout>
);

const styles = StyleSheet.create({
  votingBox: {
    marginTop: 10,
    height: 40,
    width: "75%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  votingInput: {
    padding: 0,
    width: 55,
    height: 27,
    backgroundColor: "#F7F7F7",
    borderRadius: 15,
    textAlign: "center",
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
  },
  votingText: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
  },
  submitButton: {
    marginTop: 35,
    width: 331,
    height: 50,
    backgroundColor: "#000000",
    borderRadius: 30,
    alignItems: "center",
  },
  submitButtonText: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 50,
    textAlign: "center",
    letterSpacing: "-0.022em",
    color: "#FFFFFF",
  },
});

export default EmissionScreen;
