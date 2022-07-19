import React, { useState, Fragment } from "react";
import { StyleSheet, View } from "react-native";
import { Layout, Text, Divider } from "@ui-kitten/components";
import HeaderText from "../components/HeaderText";
import DonutChart from "../components/PieChart";


const DATA = [
  {
    id: 1,
    mode: "Passenger cars",
    distance: "1",
    carbon: "192",
  },
  {
    id: 2,
    mode: "Motocycle",
    distance: "2",
    carbon: "111",
  },
  {
    id: 3,
    mode: "Bus",
    distance: "3",
    carbon: "111",
  },
  {
    id: 4,
    mode: "Heave rail(metro)",
    distance: "4",
    carbon: "111",
  },
  {
    id: 5,
    mode: "Walking",
    distance: "5",
    carbon: "0",
  },
  {
    id: 6,
    mode: "Cycling",
    distance: "6",
    carbon: "0",
  },
];


const EmissionScreen = () => (
  <Layout style={styles.screenLayout}>
    <HeaderText text={"Performance"} />
    <Text style={styles.calendar}>June 23 - June 30, 2022</Text>
    <View style={styles.Container}>
      <DonutChart />
    </View>
    
    <Text style={styles.goal}>Weekly Goal: 160g/km</Text>
    <View style={styles.Container}>
      <Divider />
      <View style={styles.ListHeadContainer}>
        <View style={styles.valueBox}>
          <Text style={styles.dis_head}>distance {"\n"}(g/km)</Text>
          <Text style={styles.car_head}>carbon cost {"\n"} (g/km)</Text>
        </View>
      </View>
      {DATA.map(({ id, mode, distance, carbon }) => (
        <Fragment key={id}>
          <View style={styles.ColumnContainer}>
            <View style={styles.RowContainer}>
              <Text style={styles.mode}>{mode} </Text>
              <View style={styles.valueBox}>
                <Text style={styles.distance}>{distance} </Text>
                <Text style={styles.carbon}>{carbon} </Text>
              </View>
            </View>
           
          </View>
        </Fragment>
      ))}
    </View>
  </Layout>
);

const styles = StyleSheet.create({
  Container: {
    // marginTop: 10,
    paddingHorizontal: 10,
  },
  VisCycle: {
    position: "absolute",
    width: 170,
    height: 170,
    left: 103,
    top: 64,
    // width: 300,
    // height: 300,
  },
  screenLayout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  ListHeadContainer: {
    marginVertical: 20,
    height: 20,
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  ColumnContainer: {
    width: "100%",
    flexWrap: "nowrap",
    flexDirection: "column",
    marginVertical: 0,
  },

  RowContainer: {
    marginVertical: 10,
    height: 20,
    width: 330,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  valueBox: {
    flexDirection: "row",
    width: 165,
  },

  calendar: {
    position: "absolute",
    width: 136,
    height: 26,
    left: "calc(50% - 136px/2 + 0.5px)",
    top: "calc(12.5%)",
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 14,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#000000"
  },
  goal: {
    position: "absolute",
    width: 232,
    height: 30,
    left: "calc(50% - 232px/2)",
    top: "calc(50% - 30px/2 + 20.5px)",
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 40,
    textAlign: "center",
    color: "#000000"
  },
  dis_head: {
    flex: -1,
    width: "50%",
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 12,
    textAlign: "center",
    color: "#000000",
  },
  car_head: {
    flex: -1,
    width: "50%",
    marginLeft: 8,
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 12,
    textAlign: "center",
    color: "#000000",
  },
  mode: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    // lineHeight: 35,
    color: "#000000",
  },
  icon: {
    justifyContent: "center",
    width: 12,
    height: 12,
    marginRight: 10,
  },

  carbon: {
    flex: 1,
    marginLeft: 8,
    textAlign: "center",
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 14,
    // lineHeight: 14,
    color: "#000000",
  },
  distance: {
    // paddingVertical: 10,
    flex: 1,
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 14,
    // lineHeight: 14,
    // display: "flex",
    textAlign: "center",
    color: "#000000",
  },
  separator: {
    marginVertical: 20,
    borderBottomColor: "#979797",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default EmissionScreen;
