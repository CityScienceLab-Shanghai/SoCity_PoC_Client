import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

/*
- 缺少返回按钮
- 需要删掉下面的tab navigator*/

const CardTextHeader = ({ title, value }) => (
  <View style={styles.CarbonCardHeaderBox}>
    <Text style={styles.cardHeaderText}>{title}</Text>
    <Text style={styles.cardHeaderValue}>{value}</Text>
  </View>
);

const VotingPowerCard = ({ power }) => (
  <View style={styles.CarbonCardBox}>
    <CardTextHeader title={"Your Voting Power"} value={power} />
  </View>
);

const CarbonInfoItem = ({ title, perc }) => (
  <View style={styles.CarbonInfoItemBox}>
    <Text style={styles.cardInfoText}>{title}</Text>
    <View style={styles.cardHeaderValueBox}>
      <Text style={styles.cardInfoValue}>{perc}</Text>
    </View>
  </View>
);

const CarbonCraditCard = ({ credit, perc1, perc2, perc3 }) => (
  <View style={styles.CarbonCardBox}>
    <CardTextHeader title={"Your Carbon Credit"} value={credit} />
    <CarbonInfoItem title={"Personal improvement"} perc={perc1} />
    <CarbonInfoItem title={"Among all participants"} perc={perc2} />
    <CarbonInfoItem title={"Among profile"} perc={perc3} />
  </View>
);

const VotingHintText = ({ remain }) => (
  <View style={{ marginTop: 20 }}>
    <Text style={styles.votingHintText}>
      Please distribute your votes to the items.
    </Text>
    <Text style={styles.votingHintText}>Remaning votes: {remain}</Text>
  </View>
);

const VotingItem = ({ index, title, updateWeights }) => (
  <View style={styles.votingBox}>
    <Text style={styles.votingText}>
      {index}. {title}
    </Text>
    <TextInput
      style={styles.votingInput}
      maxLength={2}
      onChangeText={(text) => updateWeights(index, Number(text))}
    />
  </View>
);

const VotingButtom = ({ navigation, sum }) => (
  <TouchableOpacity
    style={styles.submitButton}
    activeOpacity={0.8}
    onPress={() => (sum == 100 ? navigation.navigate("Vote") : null)}
  >
    <Text style={styles.submitButtonText}>Submit</Text>
  </TouchableOpacity>
);

const SubmitScreen = ({ navigation }) => {
  const [weights, setWeights] = useState({ 1: 0, 2: 0, 3: 0, 4: 0 });
  const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b);
  const updateWeights = (index, value) => {
    setWeights((weights) => ({ ...weights, [index]: value }));
  };
  console.log(weights);
  return (
    <Layout style={styles.screenLayout}>
      <View style={{ marginTop: 10 }} />
      <View style={styles.flexBox}>
        <VotingPowerCard power={3} />
        <CarbonCraditCard credit={10} perc1={"+2"} perc2={"10%"} perc3={"5%"} />
      </View>

      <VotingHintText remain={100 - sumValues(weights)} />
      <View style={styles.flexBox}>
        <VotingItem
          index={1}
          title={"Personal Carbon Credit"}
          updateWeights={updateWeights}
        />
        <VotingItem
          index={2}
          title={"Personal Improvement"}
          updateWeights={updateWeights}
        />
        <VotingItem
          index={3}
          title={"Among All Participants"}
          updateWeights={updateWeights}
        />
        <VotingItem
          index={4}
          title={"Among Profile"}
          updateWeights={updateWeights}
        />
        <VotingButtom navigation={navigation} sum={sumValues(weights)} />
      </View>
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
    justifyContent: "space-evenly",
  },
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
  votingHintText: {
    textAlign: "center",
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 28,
    letterSpacing: "-0.022em",
    color: "#333333",
  },
  cardHeaderText: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: "-0.022em",
    color: "#000000",
  },
  cardHeaderValue: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 36,
    lineHeight: 56,
    letterSpacing: "-0.022em",
    color: "#000000",
  },
  cardInfoText: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 28,
    color: "rgba(0, 0, 0, 0.7)",
  },
  cardInfoValue: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 28,
    color: "rgba(0, 0, 0, 0.7)",
  },
  CarbonCardBox: {
    width: "85%",
    display: "flex",
    borderRadius: 30,
    backgroundColor: "#F7F7F7",
    paddingBottom: 12,
    marginBottom: 10,
  },
  CarbonCardHeaderBox: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  CarbonInfoItemBox: {
    paddingLeft: 40,
    paddingRight: 45,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardHeaderValueBox: {
    alignItems: "left",
    width: 40,
  },
});

export default SubmitScreen;
