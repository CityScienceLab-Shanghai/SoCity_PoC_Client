import React,{Fragment} from "react";
import { StyleSheet, Image} from "react-native";
import { Layout, Text, Divider } from "@ui-kitten/components";
// import CarbonMap from "../components/CarbonMap";
import { View } from "react-native-web";

const DATA = [
  {
    id: 1,
    title: 'Personal',
    description: 'compare to last round',
    figure:'1'
  },
  {
    id: 2,
    title: 'Among all',
    description: 'compare to all participants',
    figure:'15%'
  },
  {
    id: 3,
    title: 'Among profile',
    description: 'compare to young professionals',
    figure:'50%'
  }
];


const EmissionScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">Performance</Text>
    <View style={styles.Container}>
      <Image style={styles.VisCycle} source={require('../components/performance.png')}/>
    </View>

    <View style={styles.Container}>
      {DATA.map(({id, title, description, figure}) => (
        <Fragment key={id}>
          <Divider/>
          {/* <View style={styles.separator}></View> */}
          <View style={styles.ColumnContainer}>
            <View style={styles.RowContainer}>
              <Text style={styles.title}>{title} </Text>
              <Image style={styles.icon} source={require('../components/icon.png')}/>
              <Text style={styles.figure}>{figure} </Text>
            </View>            
            <Text style={styles.description}>{description} </Text>
          </View>
          <Divider/>
        </Fragment>
      ))}
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
    
  ColumnContainer:{
    width: "100%",
    flexWrap: 'wrap', 
    flexDirection: 'column',
    marginVertical: 20,
  },

  RowContainer: {
    marginVertical: 12,
    height: 20,
    width: 330,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    flex: 6,
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 14,
    display: "flex",
    color: "#000000"
  },
  icon: {
    justifyContent: "center", 
    width: 12,
    height: 12,
    marginRight:10
  },
  
  figure: {
    flex: 1,
    textAlign:'right',
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 14,
    color: "#000000"
  },
  description: {
    // paddingVertical: 10,
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 14,
    display: "flex",
    color: "#979797"
  },
  separator: {
    marginVertical: 20,
    borderBottomColor:'#979797',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default EmissionScreen;