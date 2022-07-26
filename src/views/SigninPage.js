import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Layout, Text, Divider } from "@ui-kitten/components";
import HeaderText from "../components/HeaderText"

/***
 * 没有更改screenname！
 * ***/

const PageHeaderText = () => (
  <View style={styles.pageHeaderBox}>
    <Text style={styles.pageHeaderText}>SoCity</Text>
    <Text style={styles.pageSubtitleText}>Welcome back to Green Commute</Text>
  </View>
);

const SigninButton = ({navigation}) => (
  <TouchableOpacity
    style={styles.voteButton}
    activeOpacity={0.8}
    onPress={() => navigation.navigate("Emission")} 
  >
    <Text style={styles.signinButtonText}>Sign in</Text>
  </TouchableOpacity>
);

const SigninItem = ({placeholder}) => {
  const [text, onChangeText] = React.useState();
  return (
    <TextInput
      style={styles.signinInputText}
      onChangeText={onChangeText}
      value={text}
      placeholder={placeholder}
    />
  );
  };

const SigninCard = ({ placeholder }) => (
  <View style={styles.signinBox}>
    <SigninItem placeholder={placeholder}/>
  </View>
);
  

const SubmitScreen = ({ navigation }) => {     
  return (
    <Layout style={styles.screenLayout}>
      <PageHeaderText />
      <SigninCard placeholder={"Username"} />
      <SigninCard placeholder={"Password"} />
      <SigninButton navigation={navigation}/>
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
  signinButton: {
    marginTop: 42,
    width: "75%",
    height: 40,
    backgroundColor: "#000000",
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 40,
  },
  signinButtonText: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 40,
    textAlign: "center",
    color: "#FFFFFF",
  },
  pageHeaderText:{
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 24,
    color: "#000000",
  },
  pageHeaderBox:{
    paddingTop: "40%",
    marginBottom: 24,
    width: "85%",
    alignItems: "center",
  },
  pageSubtitleText:{
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 56,
    color: "#000000",
  },
  signinInstructionText:{
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 24,
    color: "#000000",
  },
  signinBox: {
    width: "85%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "left",
    marginBottom: 16,
  },
  signinInputText: {
    paddingLeft: 16,
    width: "100%",
    height: 38,
    backgroundColor: "#F7F7F7",
    borderRadius: 10,
    textAlign: "left",
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    color:"#000000",
  },
});

export default SubmitScreen;
