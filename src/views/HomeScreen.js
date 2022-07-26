import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View, Image } from "react-native";
import { Layout, Text, Divider } from "@ui-kitten/components";
import HeaderText from "../components/HeaderText"


const SubmitFeedbackButton = ({navigation}) => (
  <TouchableOpacity
    style={styles.feedbackButton}
    activeOpacity={0.8}
    onPress={() => navigation.navigate("Emission")}  //navigate to 'afterFeedback'
  >
    <Text style={styles.feedbackButtonText}>Let us Know</Text>
  </TouchableOpacity>
);

const LogoutButton = ({navigation}) => (
  <TouchableOpacity
    style={styles.logoutButton}
    activeOpacity={0.8}
    onPress={() => navigation.navigate("Emission")}  //navigate to logout
  >
    <Text style={styles.logoutButtonText}>Log out</Text>
  </TouchableOpacity>
);

const HeaderCard = () => (
  <View style={styles.headerBox}>
    <View style={styles.headerItemBox}>
      <HeaderText text={"  "} />
    </View>
    <View style={styles.headerItemBox}>
      <HeaderText text={" Home "} />
    </View>
    <View style={styles.headerItemBox}>
      <LogoutButton />
    </View>
  </View>
);
  
const ProfileList = () => (
  <ProfileItem
    username={"charrrr"}
    date={"22/08/01"}
    pic={require("../../assets/Sample/localIcon/1.png")}
  />
);

const ProfileItem = ({ username, date , pic }) => (
  <View style={styles.profileBox}>
    <Image style={styles.profileImg} source={pic} />
    <Text style={styles.usernameText}>@{username}</Text>
    <Text style={styles.userJoinDate}>
      Join Green Commute since {date}
    </Text>
  </View>
);

const MultilineTextInput = (props) => {
  return (
    <TextInput
      {...props}
      editable
      maxLength={40}
    />
  )
};

const FeedbackItem = () => {
  const [value, onChangeText] = React.useState();
  return (
    <View style={styles.feedbackBox}>   
      <MultilineTextInput
        style={styles.feedbackInputText}
        multiline
        onChangeText={text => onChangeText(text)}
        value={value}
        placeholder={"Please leave us a message here if you have anything to say to us!"}
      />
    </View>
  );
};

const HomeScreen = ({ navigation }) => {     
  return (
    <Layout style={styles.screenLayout}>
      <HeaderCard/>
      <ProfileList />
      <FeedbackItem />
      <SubmitFeedbackButton navigation={navigation}/>
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
  headerBox: {
    width: 330,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerItemBox:{
    width: 110,
    alignItems: "center",
  },
  feedbackButton: {
    width: "75%",
    height: 40,
    backgroundColor: "#000000",
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 40,
  },
  feedbackButtonText: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 40,
    textAlign: "center",
    color: "#FFFFFF",
  },
  logoutButton: {
    width: 70,
    height: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    alignItems: "right",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 50,
    shadowColor: "rgba(18, 28, 42, 0.08)",
    shadowOpacity: 1,
  },
  logoutButtonText: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 40,
    textAlign: "center",
    color: "#000000",
  },
  userJoinDate:{
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 24,
    color: "#707070",
    alignItems: "center",
  },
  usernameText:{
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    color: "#000000",
    alignItems: "center",
  },
  profileImg: {
    width: 90,
    height: 90,
    borderRadius: 100,
    marginBottom: 16,
    marginTop: 24,
    alignItems: "center",
  },
  profileBox: {
    width: "85%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 24,
  },
  feedbackBox: {
    width: "85%",
    height: 320,
    display: "flex",
    alignItems: "center",
    marginBottom: 24,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    justifyContent: 'center'
  },
  feedbackInputText: {
    width: "90%",
    height: "90%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    textAlign: "left",
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    color:"#000000"
  },
});

export default HomeScreen;
