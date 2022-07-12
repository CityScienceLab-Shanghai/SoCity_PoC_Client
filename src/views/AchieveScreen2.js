import React from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { Layout, Text, Divider } from "@ui-kitten/components";

const RightArrow = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="9" cy="9" r="9" fill="black" />
    <path
      d="M6.85742 4.28613L12.0003 9.27773L6.85742 13.7147"
      stroke="white"
      strokeWidth="2"
    />
  </svg>
);

const RewardCard = ({ selected, rewardTitle, count }) =>
  selected ? (
    <View style={styles.rewardCard}>
      <Text style={styles.rewardTitleText}> {rewardTitle}</Text>
      <Text style={styles.rewardCountText}> {count}</Text>
      <View style={styles.arrow}>
        <RightArrow />
      </View>
    </View>
  ) : (
    <View style={styles.rewardCardEmpty}>
      <Text style={styles.rewardTitleText}> {rewardTitle}</Text>
      <Text style={styles.rewardCountText}> {count}</Text>
      <View style={styles.arrow}>
        <RightArrow />
      </View>
    </View>
  );

const RewardBar = () => (
  <ScrollView
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    style={{ width: "100%", height: 170, flexGrow: 0 }}
  >
    <View style={{ width: 26 }} />
    <RewardCard selected={true} rewardTitle={"Token"} count={10} />
    <RewardCard selected={false} rewardTitle={"Coupon"} count={0} />
    <RewardCard selected={false} rewardTitle={"NFT"} count={2} />
  </ScrollView>
);

const PickerItem = ({ selected, title }) =>
  selected ? (
    <View style={styles.pickerItem}>
      <Text style={styles.pickerItemText}>{title}</Text>
    </View>
  ) : (
    <View style={styles.pickerItemEmpty}>
      <Text style={styles.pickerItemTextEmpty}>{title}</Text>
    </View>
  );

const PickerBox = () => (
  <View style={styles.pickerBox}>
    <PickerItem selected={true} title={"Popularity"} />
    <PickerItem selected={false} title={"Distance"} />
    <PickerItem selected={false} title={"Review"} />
    <PickerItem selected={false} title={"Price"} />
  </View>
);

const LocalItem = ({ name, distance, avgPrice, pic }) => (
  <View>
    <View style={styles.rowBox}>
      <Image style={styles.localItemImg} source={pic} />
      <View>
        <Text style={styles.localItemTitle}>{name}</Text>
        <Text style={styles.localItemDetail}>
          {distance} | average {avgPrice} tokens
        </Text>
      </View>
    </View>
    <Divider />
  </View>
);

const LocalItemList = () => (
  <ScrollView style={{ width: "100%", flex: 1 }} bounces={true}>
    <LocalItem
      name={"Blue Botton Cafe"}
      distance={"4km"}
      avgPrice={5}
      pic={require("../../assets/Sample/localIcon/1.png")}
    />
    <LocalItem
      name={"Boston Library"}
      distance={"5km"}
      avgPrice={1}
      pic={require("../../assets/Sample/localIcon/2.png")}
    />
    <LocalItem
      name={"Blue Bike"}
      distance={"2km"}
      avgPrice={1}
      pic={require("../../assets/Sample/localIcon/3.png")}
    />
    <LocalItem
      name={"Blue Botton Cafe"}
      distance={"4km"}
      avgPrice={5}
      pic={require("../../assets/Sample/localIcon/1.png")}
    />
    <LocalItem
      name={"Boston Library"}
      distance={"5km"}
      avgPrice={1}
      pic={require("../../assets/Sample/localIcon/2.png")}
    />
    <LocalItem
      name={"Blue Bike"}
      distance={"2km"}
      avgPrice={1}
      pic={require("../../assets/Sample/localIcon/3.png")}
    />
  </ScrollView>
);

const AchieveScreen = () => (
  <Layout style={styles.screenLayout}>
    <RewardBar />
    <PickerBox />
    <LocalItemList />
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
  rowBox: {
    flexDirection: "row",
  },
  rewardCard: {
    margin: 6.5,
    width: 133,
    height: 156,
    backgroundColor: "#F1F1F1",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 50,
    shadowColor: "rgba(18, 28, 42, 0.08)",
    shadowOpacity: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  rewardCardEmpty: {
    margin: 6.5,
    width: 133,
    height: 156,
    borderWidth: 1,
    borderColor: "#DADADA",
    borderStyle: "solid",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  rewardTitleText: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    letterSpacing: "-0.022em",
    color: "#000000",
    marginLeft: 14,
    marginTop: 16,
  },
  rewardCountText: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 32,
    letterSpacing: "-0.022em",
    color: "#000000",
    marginLeft: 9,
    marginTop: 4,
  },
  arrow: {
    position: "absolute",
    right: 12,
    bottom: 12,
  },
  pickerBox: {
    marginTop:35,
    marginBottom:10,
    flexDirection: "row",
    backgroundColor: "#FBFBFB",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    width: 320,
    height: 40,
  },
  pickerItem: {
    width: 80,
    height: 40,
    backgroundColor: "#FFFFFF",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 50,
    shadowColor: "rgba(18, 28, 42, 0.08)",
    shadowOpacity: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  pickerItemText: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 10,

    letterSpacing: "-0.022em",
    color: "#5F646D",
  },
  pickerItemEmpty: {
    width: 80,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  pickerItemTextEmpty: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 10,
    letterSpacing: "-0.022em",
    color: "#5F646D",
  },
  localItemImg: {
    width: 60,
    height: 60,
    borderRadius: 100,
    marginLeft: 62,
    marginBottom: 24,
    marginRight: 37,
    marginTop: 24,
  },
  localItemDetail: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 14,
    display: "flex",
    alignItems: "center",
    letterSpacing: "-0.022em",
    color: "rgba(51, 51, 51, 0.7)",
    marginTop:10,
  },
  localItemTitle: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 14,
    display: "flex",
    alignItems: "center",
    letterSpacing: "-0.022em",
    color: "#333333",
    marginTop:35,
  },
});

export default AchieveScreen;
