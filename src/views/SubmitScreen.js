import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Layout, Text, Divider } from "@ui-kitten/components";
import HeaderText from "../components/HeaderText"

const CardTextHeader = ({ title }) => (
  <View style={styles.CarbonCardHeaderBox}>
    <Text style={styles.cardHeaderText}>{title}</Text>
  </View>
);

const CardLegend = ({ legend1, legend2 }) => (
  <View style={styles.CarbonInfoItemBox}>
    <View style={styles.CarbonInfoBox}>
      <Text style={styles.cardInfoText} />
    </View>
    <View style={styles.cardHeaderValueBox}>
      <Text style={styles.CardLegendText}>{legend1}</Text>
    </View>
    <View style={styles.cardHeaderValueBox}>
      <Text style={styles.CardLegendText}>{legend2}</Text>
    </View>
  </View>
);

const CarbonInfoItem = ({ title, percA, percB }) => (
  <View style={styles.CarbonInfoItemBox}>
    <View style={styles.CarbonInfoBox}>
      <Text style={styles.cardInfoText}>{title}</Text>
    </View>
    <View style={styles.cardHeaderValueBox}>
      <Text style={styles.cardInfoValue}>{percA}</Text>
    </View>
    <View style={styles.cardHeaderValueBox}>
      <Text style={styles.cardInfoValue}>{percB}</Text>
    </View>
  </View>
);

const CarbonAllowanceItem = ({ title, valueA, valueB }) => (
  <View style={styles.CarbonInfoItemBox}>
    <View style={styles.CarbonInfoBox}>
      <Text style={styles.cardAllowanceText}>{title}</Text>
    </View>
    <View style={styles.cardHeaderValueBox}>
      <Text style={styles.cardAllowanceText}>{valueA}</Text>
    </View>
    <View style={styles.cardHeaderValueBox}>
      <Text style={styles.cardAllowanceText}>{valueB}</Text>
    </View>
  </View>
);

const CarbonCraditCard = ({ perc1M, perc1L, perc2M, perc2L, perc3M, perc3L, perc4M, perc4L, perc5M, perc5L, perc6M, perc6L, valueM, valueL }) => (
  <View style={styles.CarbonCardBox}>
    <CardTextHeader title={"Recap of travel mode structure"} />
    <CardLegend legend1={"Mine%"} legend2={"Last vote%"} />
    <CarbonInfoItem title={"Passenger cars"} percA={perc1M} percB={perc1L} />
    <CarbonInfoItem title={"Motocycle"} percA={perc2M} percB={perc2L} />
    <CarbonInfoItem title={"Bus"} percA={perc3M} percB={perc3L} />
    <CarbonInfoItem title={"Heavy rail(metro)"} percA={perc4M} percB={perc4L}/>
    <CarbonInfoItem title={"Walking"} percA={perc5M} percB={perc5L}/>
    <CarbonInfoItem title={"Cycling"} percA={perc6M} percB={perc6L}/>
    <Divider style={{color: "#000000", marginLeft: "7.5%", marginRight: "7.5%", marginTop: "2%", marginBottom: "2%",}} />
    <CarbonAllowanceItem title={"Carbon allowance g/km"} valueA={valueM} valueB={valueL}/>
  </View>
);

const VotingHintText = ({ remain }) => (
  <View style={styles.VoteHintCardBox}>
    <View style={styles.CarbonCardHeaderBox}>
      <Text style={styles.cardHeaderText}>
        Vote for the next round of travel structure
      </Text>
      <Text style={styles.votingHintText}>Remaning percentage: {remain}</Text>
    </View>
  </View>
);

const VotingItem = ({ title, updateWeights }) => (
  <View style={styles.votingBox}>
    <Text style={styles.votingText}>{title}</Text>
    <TextInput
      style={styles.votingInput}
      maxLength={2}
      onChangeText={(text) => updateWeights(index, Number(text))}
    />
  </View>
);

const VotingAllowance = ({ updateAllowance }) => (
  <View style={styles.votingBox}>
    <Text style={styles.voteAllowanceText}>Carbon allowance g/km </Text>
    <Text style={styles.voteAllowanceValue}>{updateAllowance}</Text>
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
  const [weights, setWeights] = useState({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 });
  const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b);
  const updateWeights = (index, value) => {
    setWeights((weights) => ({ ...weights, [index]: value }));
  };
  console.log(weights);
  return (
    <Layout style={styles.screenLayout}>
      <HeaderText text={"Voting"} />
      <View style={{ marginTop: 10 }} />
      <View style={styles.flexBox}>
        <CarbonCraditCard perc1M={"68"} perc1L={"65"} perc2M={"2"} perc2L={"5"} perc3M={"0"} perc3L={"5"} perc4M={"12"} perc4L={"10"} perc5M={"5"} perc5L={"3"} perc6M={"13"} perc6L={"12"} valueM={"120"} valueL={"110"}/>
      </View>

      <VotingHintText remain={100 - sumValues(weights)} />
      <View style={styles.flexBox}>
        <VotingItem
          title={"•  Passenger cars"}
          updateWeights={updateWeights}
        />
        <VotingItem
          title={"•  Motocycle"}
          updateWeights={updateWeights}
        />
        <VotingItem
          title={"•  Bus"}
          updateWeights={updateWeights}
        />
        <VotingItem
          title={"•  Heavy rail(metro)"}
          updateWeights={updateWeights}
        />
        <VotingItem
          title={"•  Cycling"}
          updateWeights={updateWeights}
        />
        <VotingItem
          title={"•  Walking"}
          updateWeights={updateWeights}
        />
        <VotingAllowance
          updateAllowance={"10"}
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
    justifyContent: "flex-start",
  },
  votingBox: {
    height: 40,
    width: "65%",
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
    fontSize: 14,
    lineHeight: 35,
  },
  submitButton: {
    marginTop: 35,
    width: 330,
    height: 40,
    backgroundColor: "#000000",
    borderRadius: 30,
    alignItems: "center",
  },
  submitButtonText: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 40,
    textAlign: "center",
    color: "#FFFFFF",
  },
  votingHintText: {
    textAlign: "left",
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 28,
    color: "#333333",
  },
  cardHeaderText: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 21,
    color: "#000000",
  },
  cardInfoText: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 28,
    color: "#000000",
  },
  cardInfoValue: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 28,
    color: "#000000",
  },
  CardLegendText: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 18,
    color: "#000000",
  },
  cardAllowanceText: {
    fontFamily: "Helvetica",
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 28,
    color: "#000000",
  },
  voteAllowanceValue: {
    width: 55,
    backgroundColor: "#FFFFFF",
    textAlign: "center",
    fontFamily: "Helvetica",
    fontStyle: "italic",
    fontWeight: "400",
  },
  voteAllowanceText: {
    width: 200,
    fontFamily: "Helvetica",
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 28,
    color: "#000000",
    textAlign: "right",
  },
  CarbonCardBox: {
    width: "85%",
    display: "flex",
    borderRadius: 10,
    backgroundColor: "#F7F7F7",
    paddingBottom: 12,
    marginBottom: 10,
  },
  CarbonCardHeaderBox: {
    paddingTop: 16,
    paddingLeft: 18,
    paddingBottom: 12,
    display: "flex",
  },
  CarbonInfoItemBox: {
    paddingLeft: 32,
    paddingRight: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  CarbonInfoBox: {
    width: 150,
    felxDirection: "row",
  },
  cardHeaderValueBox: {
    width: 60,
    alignItems: "center",
  },
  VoteHintCardBox: {
    width: "85%",
    display: "flex",
  },
});

export default SubmitScreen;
