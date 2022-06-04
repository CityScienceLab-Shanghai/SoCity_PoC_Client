import React from "react";
import * as tf from "@tensorflow/tfjs";
// import { bundleResourceIO,  } from "@tensorflow/tfjs-react-native";
import { StyleSheet, ScrollView, TouchableOpacity, View } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import HeaderText from "../components/HeaderText";

const loadModel = async () => {
  const randomArr = (len, min, max) =>
    Array(len)
      .fill(1)
      .map((v) => Math.random() * (max - min) + min);

  await tf.ready();

  // let data = require("../../assets/Model/model.json");

  const model = await tf
    .loadLayersModel("https://socitymodel.netlify.app/model.json")
    .catch((e) => {
      console.log("[LOADING ERROR] info:", e);
    });

  console.log(tf.tensor2d([randomArr(8, 0, 1), randomArr(8, 0, 1)]).toString());
  console.log(model.predict(tf.tensor2d([randomArr(8, 0, 1), randomArr(8, 0, 1)])).toString());
  return model;
};

const DateText = ({ date, countdown }) => (
  <View style={styles.flexBox}>
    <Text style={styles.dateText}>{date}</Text>
    <Text style={styles.countdownText}>{countdown} days</Text>
  </View>
);

const VoteScreen = ({ navigation }) => {
  const model = loadModel();

  return (
    <Layout style={styles.screenLayout}>
      <HeaderText text={"Voting"} />
      <DateText date={"Apr 12"} countdown={0} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  flexBox: {
    width: "100%",
    alignItems: "center",
  },
  screenLayout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  dateText: {
    marginTop: 20,
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 32,
    lineHeight: 56,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: "-0.022em",
    color: "#000000",
  },
  countdownText: {
    fontFamily: "Helvetica",
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: 24,
    // lineHeight: 56,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: "-0.022em",
    color: "#5F646D",
  },
  voteButton: {
    marginTop: 35,
    width: 145,
    height: 50,
    backgroundColor: "#000000",
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 50,
  },
  voteButtonText: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 50,
    textAlign: "center",
    letterSpacing: "-0.022em",
    color: "#FFFFFF",
  },
  historyHeaderText: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 56,
    letterSpacing: "-0.022em",
    color: "#000000",
  },
  historyInfoText: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 28,
    color: "rgba(51, 51, 51, 0.7)",
  },
  historyInfoValue: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 28,
    color: "#333333",
  },
  historyItemBox: {
    paddingLeft: 30,
    paddingRight: 25,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  historyBox: {
    marginTop: 10,
    marginLeft: "7%",
    width: "85%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  historyDateText: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 20,
    color: "#333333",
  },
  historyHeaderBox: {
    width: "90%",
  },
});

export default VoteScreen;
