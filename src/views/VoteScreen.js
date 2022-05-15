import React from "react";
import { StyleSheet, ScrollView, TouchableOpacity, View } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
// import CarbonMap from "../components/CarbonMap";

const HistoryPercItem = ({ title, perc }) => (
  <View style={styles.historyItemBox}>
    <Text style={styles.historyInfoText}>{title}</Text>
    <Text style={styles.historyInfoValue}>{perc}</Text>
  </View>
);

const HistoryItem = ({ date, perc1, perc2, perc3, perc4 }) => (
  <View style={styles.historyBox}>
    <Text style={styles.historyDateText}>{date}</Text>
    <View style={{ width: "80%" }}>
      <HistoryPercItem title={"Personal carbon credit"} perc={perc1} />
      <HistoryPercItem title={"Personal improvement"} perc={perc2} />
      <HistoryPercItem title={"Among all participants"} perc={perc3} />
      <HistoryPercItem title={"Among profile"} perc={perc4} />
    </View>
  </View>
);

const DateText = ({ date, countdown }) => (
  <View style={styles.flexBox}>
    <Text style={styles.dateText}>{date}</Text>
    <Text style={styles.countdownText}>{countdown} days</Text>
  </View>
);

const VotingButtom = () => (
  <TouchableOpacity style={styles.voteButton} activeOpacity={0.8}>
    <Text style={styles.voteButtonText}>Vote</Text>
  </TouchableOpacity>
);

const PolicyHistory = () => (
  <View style={styles.historyHeaderBox}>
    <Text style={styles.historyHeaderText}> Policy history </Text>
  </View>
);

const VoteScreen = () => (
  <Layout style={styles.screenLayout}>
    <DateText date={"Apr 12"} countdown={0} />
    <VotingButtom />
    <PolicyHistory />
    <ScrollView style={{ width: "100%" }} bounces={true}>
      <HistoryItem
        date={"29 Mar"}
        perc1={"10%"}
        perc2={"50%"}
        perc3={"20%"}
        perc4={"30%"}
      />
      <HistoryItem
        date={"15 Mar"}
        perc1={"20%"}
        perc2={"20%"}
        perc3={"40%"}
        perc4={"20%"}
      />
      <HistoryItem
        date={"1 Mar"}
        perc1={"10%"}
        perc2={"50%"}
        perc3={"20%"}
        perc4={"30%"}
      />
      <HistoryItem
        date={"18 Feb"}
        perc1={"20%"}
        perc2={"20%"}
        perc3={"40%"}
        perc4={"20%"}
      />
    </ScrollView>
  </Layout>
);

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
    marginTop: 50,
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
