import {React, useState, useEffect} from "react";
import { StyleSheet, ScrollView, TouchableOpacity, View } from "react-native";
import { Layout, Text, Divider } from "@ui-kitten/components";
import HeaderText from "../components/HeaderText"
import { style } from "d3";

const CountdownTimer = ({ value, legend }) => (
  <View style={styles.countdownValueLegendBox}>
    <View style={styles.countdownValueBox}>
      <Text style={styles.countdownValueText}>{value}</Text>
    </View>
    <View style={styles.countdownLegendBox}>
      <Text style={styles.countdownLegendText}>{legend}</Text>
    </View>
  </View>
);

const CountdownCard = ({ day, hour, minute, second }) => (
  <View style={styles.countdownTimerBox}>
    <CountdownTimer value={day} legend={"day"} />
    <CountdownTimer value={hour} legend={"hour"} />
    <CountdownTimer value={minute} legend={"minute"} />
    <CountdownTimer value={second} legend={"second"} />
  </View>
);

const CountdownText = ({ instruction }) => (                   
  <View style={styles.countdownHeaderBox}>
    <Text style={styles.countdownHeaderText}>{instruction}</Text>
  </View>
);

function getInstructionMessage(voteStatus){    
  if (voteStatus === "normalRound") {
    return <CountdownText instruction={"Next date: Tuesday July 20"} />;          //日期要改成变量
  } else if (voteStatus === "toVote") {
    return <CountdownText instruction={"The vote will be closed in"} />; 
  } else if (voteStatus === "afterVote") {
    return <CountdownText instruction={"The result will be released in"} />; 
  }
};

const VotingButton = ({ navigation, buttonText }) => (
  <TouchableOpacity
    style={styles.voteButton}
    activeOpacity={0.8}
    onPress={() => navigation.navigate("Submit")}   //如何使跳转目标也成为变量？pop up live result
  >
    <Text style={styles.voteButtonText}>{buttonText}</Text>
  </TouchableOpacity>
);

const VotingButtonInactive = () => (
  <View style={styles.voteButtonInactive}>
      <Text style={styles.voteButtonText}>Wait for the Day</Text>
  </View>
);

function getVotingButton( navigation, voteStatus ){
  if (voteStatus === "normalRound") {
    return <VotingButtonInactive />
  } else if (voteStatus === "toVote") {
    return <VotingButton navigation={navigation} buttonText={"Vote"} />
  } else if (voteStatus === "afterVote") {
    return <VotingButton navigation={navigation} buttonText={"Check Live Result"} />
  };
};

const PolicyHistory = () => (
  <View style={styles.historyHeaderBox}>
    <Text style={styles.historyHeaderText}> History </Text>
  </View>
);

const HistoryPercItem = ({ title, perc }) => (
  <View style={styles.historyItemBox}>
    <Text style={styles.historyInfoText}>{title}</Text>
    <Text style={styles.historyInfoValue}>{perc}</Text>
  </View>
);

const HistoryItem = ({ date, perc1, perc2, perc3, perc4, perc5, perc6 }) => (
  <View>
    <Divider style={{marginLeft: "7.5%", marginRight: "7.5%",}} />
    <View style={styles.historyBox}>
      <Text style={styles.historyDateText}>{date}</Text>
      <View style={{ width: "64%" }}>
        <HistoryPercItem title={"Passenger cars"} perc={perc1} />
        <HistoryPercItem title={"Motorcycle"} perc={perc2} />
        <HistoryPercItem title={"Bus"} perc={perc3} />
        <HistoryPercItem title={"Heavy rail(metro)"} perc={perc4} />
        <HistoryPercItem title={"Walking"} perc={perc5} />
        <HistoryPercItem title={"Cycling"} perc={perc6} />
      </View>
    </View>
  </View>
);

function GetTimeDiff(date) {
  const [timeDiff, setTimeDiff] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      var nowtime = new Date().getTime();
      var endtime = new Date(date).getTime();
      setTimeDiff(endtime - nowtime);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (timeDiff);
};

const VoteScreen = ({ navigation }) => {                
  const timeDifference = GetTimeDiff("2022/07/20");
  let buttonInUse = getVotingButton(navigation, "normalRound");        //条件渲染
  let instructionMessage = getInstructionMessage("normalRound")         //条件渲染
  return (
    <Layout style={styles.screenLayout}>
      <HeaderText text={"Voting"} />
      {instructionMessage}  
      <CountdownCard 
      day={Math.floor((timeDifference / 1000 / 3600) / 24)} 
      hour={Math.floor((timeDifference / 1000 / 3600) % 24)} 
      minute={Math.floor((timeDifference / 1000 / 60) % 60)} 
      second={Math.floor(timeDifference / 1000 % 60)} 
      />
      {buttonInUse}
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
;}


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
  countdownHeaderText:{
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 56,
    display: "flex",
    alignItems: "left",
    textAlign: "left",
    color: "#000000"
  },
  countdownValueText: {
    height: 60,
    fontFamily: "Helvetica",
    fontWeight: "400",
    fontSize: 24,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#000000",
  },
  countdownLegendText: {
    height: 20,
    fontFamily: "Helvetica",
    fontWeight: "400",
    fontSize: 12,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#000000",
  },
  voteButton: {
    marginTop: 42,
    width: "75%",
    height: 40,
    backgroundColor: "#000000",
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 40,
  },
  voteButtonInactive: {
    marginTop: 42,
    width: "75%",
    height: 40,
    backgroundColor: "#979797",
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 40,
  },
  voteButtonText: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 40,
    textAlign: "center",
    color: "#FFFFFF",
  },
  historyHeaderText: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 56,
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  historyBox: {
    marginTop: 16,
    marginLeft: "12.5%",
    marginRight: "12.5%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  historyDateText: {
    paddingTop: 4,
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 20,
    color: "#333333",
  },
  historyHeaderBox: {
    width: "85%",
  },
  countdownHeaderBox: {
    width: "75%",
  },
  countdownTimerBox: {
    width: "75%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  countdownValueBox:{
    height: 60,
    width: 60,
    backgroundColor: "#F1F1F1",
    borderRadius: 10,
    alignItems: "center",
  },
  countdownLegendBox:{
    marginTop: 8,
    width: 60,
    alignItems: "center",
  },
  countdownValueLegendBox: {
    alignItems: "center",

  },
});

export default VoteScreen;
