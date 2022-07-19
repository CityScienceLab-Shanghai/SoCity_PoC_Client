import React from "react";
import { StyleSheet, ScrollView, TouchableOpacity, View } from "react-native";
import { Layout, Text, Divider } from "@ui-kitten/components";
import HeaderText from "../components/HeaderText"

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

const VotingButtom = ({ navigation }) => (
  <TouchableOpacity
    style={styles.voteButton}
    activeOpacity={0.8}
    onPress={() => navigation.navigate("Submit")}
  >
    <Text style={styles.voteButtonText}>Vote for Next Round</Text>
  </TouchableOpacity>
);

var timeId;

function timeDiff(b) {
  function countDown () {
    var regEx = new RegExp("\\-","gi");
    var validDateStr=b.replace(regEx,"/");
    var milliseconds=Date.parse(validDateStr);
    return milliseconds;
  }
  var a = countDown(b)
  var sys_second = new Date(a).getTime() - new Date().getTime();
  return sys_second;
}

const countDownDay = (date) => {
  var timeDifference = timeDiff(date);
  let day = Math.floor((timeDifference / 1000 / 3600) / 24);
  return day;
}

const countDownHour = (date) => {
  var timeDifference = timeDiff(date);
  let hour = Math.floor((timeDifference / 1000 / 3600) % 24);
  return hour;
}

const countDownMinute = (date) => {
  var timeDifference = timeDiff(date);
  let minute = Math.floor((timeDifference / 1000 / 60) % 60);
  return minute;
}

const countDownSecond = (date) => {
  var timeDifference = timeDiff(date);
  let second = Math.floor(timeDifference / 1000 % 60);
  return second;
}
  
const VoteScreen = ({ navigation }) => (
  <Layout style={styles.screenLayout}>
    <HeaderText text={"Voting"} />
    <CountdownText instruction={"The vote will be closed in"} />
    <CountdownCard day={countDownDay("2022-07-14")} hour={countDownHour("2022-07-14")} minute={countDownMinute("2022-07-14")} second={countDownSecond("2022-07-14")} />
    <VotingButtom navigation={navigation} />
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
  voteButtonText: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 40,
    textAlign: "center",
    color: "#FFFFFF",
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
