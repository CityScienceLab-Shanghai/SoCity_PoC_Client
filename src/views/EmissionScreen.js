import React, { Fragment } from "react";
import { StyleSheet, Image, View } from "react-native";
import { Layout, Text, Divider } from "@ui-kitten/components";
import HeaderText from "../components/HeaderText";

const DATA = [
  {
    id: 1,
    title: "Personal",
    description: "compare to last round",
    value: "1",
  },
  {
    id: 2,
    title: "Among all",
    description: "compare to all participants",
    value: "15%",
  },
  {
    id: 3,
    title: "Among profile",
    description: "compare to young professionals",
    value: "50%",
  },
];

const RedTriangle = () => (
  <svg
    width="12"
    height="9"
    viewBox="0 0 12 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 9L11.1962 0H0.803848L6 9Z" fill="#D75A5A" />
  </svg>
);

const EmissionScreen = () => (
  <Layout style={styles.screenLayout}>
    <HeaderText text={"Performance"} />
    <View style={styles.Container}>
      <Image
        style={styles.VisCycle}
        source={require("../components/performance.png")}
      />
    </View>

    <View style={styles.Container}>
      {DATA.map(({ id, title, description, value }) => (
        <Fragment key={id}>
          <Divider />
          <View style={styles.ColumnContainer}>
            <View style={styles.RowContainer}>
              <Text style={styles.title}>{title} </Text>
              <View style={styles.valueBox}>
                <RedTriangle />
                <Text style={styles.value}>{value} </Text>
              </View>
            </View>
            <Text style={styles.description}>{description} </Text>
          </View>
        </Fragment>
      ))}
      <Divider />
    </View>
  </Layout>
);

const styles = StyleSheet.create({
  Container: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  VisCycle: {
    width: 300,
    height: 300,
  },
  screenLayout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  ColumnContainer: {
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "column",
    marginVertical: 20,
  },

  RowContainer: {
    marginVertical: 12,
    height: 20,
    width: 330,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  valueBox: {
    flexDirection: "row",
    width: 70,
  },
  title: {
    flex: 6,
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 14,
    display: "flex",
    color: "#000000",
  },
  icon: {
    justifyContent: "center",
    width: 12,
    height: 12,
    marginRight: 10,
  },

  value: {
    flex: 1,
    marginLeft: 8,
    textAlign: "left",
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 14,
    color: "#000000",
  },
  description: {
    // paddingVertical: 10,
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 14,
    display: "flex",
    color: "#979797",
  },
  separator: {
    marginVertical: 20,
    borderBottomColor: "#979797",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default EmissionScreen;
