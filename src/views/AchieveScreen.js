import React from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { Layout, Text, Divider } from "@ui-kitten/components";
import HeaderText from "../components/HeaderText"



// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }

//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }

//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } 
//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }




const RewardBar = () => (
  <ScrollView
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    style={{ width: "100%", height: 170, flexGrow: 0 }}
  >
    <View style={{ width: 25 }} />
    <RewardCard selected={true} rewardTitle={"＄GCOIN"} count={10} />
    <RewardCard selected={false} rewardTitle={"Carbon Credit"} count={4} />
  </ScrollView>
);




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



const LocalItem = ({ name, distance, avgPrice, pic, number }) => (
  <View style={{justifyContent : "space-between" , flexDirection: "row",}}>
    <View style={styles.rowBox}>
      <Image style={styles.localItemImg} source={pic} />
      <View>
        <Text style={styles.localItemTitle}>{name}</Text>
        <Text style={styles.localItemDetail}>
          {distance} | {avgPrice} 
        </Text>
      </View>
    </View>
    <View>
      <View style={styles.rowBox}>
      <Text style={styles.localItemNumber}>{number}
      </Text>
      </View>
    </View>
  </View>
);

const LocalItemList = () => (
  <ScrollView style={{ width: "100%", flex: 1 }} bounces={true}>
    <LocalItem
      name={"May,2022"}
      distance={"3 transactions"}
      avgPrice={"6 tokens"}
    />
    <LocalItem
      name={"coupon"}
      distance={"detail"}
      number={"+2"}
    />
    <LocalItem
      name={"coupon"}
      distance={"detail"}
      number={"+2"}
    />
    <LocalItem
      name={"coupon"}
      distance={"detail"}
      number={"+2"}
    />
    <LocalItem
      name={"coupon"}
      distance={"detail"}
      number={"+2"}
    />
    <LocalItem
      name={"coupon"}
      distance={"detail"}
      number={"+2"}
    />
  </ScrollView>
  
);

const LocalItemList2 = () => (
  <ScrollView style={{ width: "100%", flex: 1 }} bounces={true}>
    <LocalItem
      name={"June,2022"}
      distance={"2 rounds"}
      avgPrice={"1 Carbon Credit"}
    />
    <LocalItem
      name={"June 23"}
      distance={"Carbon Emission:10"}
      number={"+2"}
    />
    <LocalItem
      name={"June 16"}
      distance={"Carbon Emission:8"}
      number={"+2"}
    />
  </ScrollView>
  
);


const AchieveScreen = () => {
  let historyList;
  if (true){
    historyList = <LocalItemList /> ;
  }
  else{
    historyList = <LocalItemList2 /> ;
  }
  return (
  <Layout style={styles.screenLayout}>
    <HeaderText text={"Reward"} />
    <RewardBar />
    {historyList }
  </Layout>
)};



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
    justifyContent: "flex-start"
  },
  rewardCard: {
    margin: 6.5,
    width: 156,
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
    width: 156,
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
    marginTop:15,
    marginBottom:20,
    marginLeft:20,
  },
  localItemTitle: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 14,
    display: "flex",
    alignItems: "center",
    letterSpacing: "-0.022em",
    color: "#333333",
    marginTop:20,
    marginLeft:20,
  },
  localItemNumber: {
    alignSelf: "flex-end",
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 14,
    display: "flex",
    alignItems: "center",
    letterSpacing: "-0.022em",
    color: "#333333",
    marginTop:17,
    marginBottom:18,
    marginRight:30,
  },
});

export default AchieveScreen;
