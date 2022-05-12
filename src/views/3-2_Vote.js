

import React, {Component} from 'react';
import { StyleSheet, TextInput,View,TouchableOpacity} from 'react-native';

import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  Layout,
  Text,
  Input,
  Button,
  BottomNavigation,
  BottomNavigationTab
  } from '@ui-kitten/components';
// import { View } from 'react-native-web';





export const HomeScreen = () => (
<View style={ styles.container}>
  <View style={styles.header}>
    <Text category='h2' style={styles.boldTextHeader} >Your Voting Power    3</Text> 
  </View>

  <View style={styles.body}>
    <Text category='h2' style={styles.boldTextBody}>Your Emission        10</Text>
      <View style={ styles.slightTextBody}>
        <Text category='h6' style={{ textAlign:'center'}}>Personal improvement    +2 </Text>
        <Text category='h6' style={{ textAlign:'center'}}>Among all participants    10% </Text>
        <Text category='h6' style={{ textAlign:'center'}}>Among profile    5%</Text>
      </View>
  </View>
</View>

);

export const CenterText= () => {
  return(
  <View style={styles.container}>
    <View style={styles.Center}>
    <Text category='h6' style={ styles.CenterText}>Please distribute your votes to the items.</Text> 
    <Text category='h6' style={styles.CenterText}>Remaning votes: 100</Text>
    </View>
  </View>
  )
};

const VotingItem = ({ index, title }) => (
  <View style={styles.votingBox}>
    <Text style={styles.votingText}>
      {index}. {title}
    </Text>
    <TextInput style={styles.votingInput} maxLength={2} />
  </View>
);

const SubmitButton = () => (
  <TouchableOpacity  style={styles.submitButton}  activeOpacity={0.8}>
    <Text style={styles.submitButtonText}>Submit</Text>
  </TouchableOpacity>
);

export const LayoutLevelShowcase = () => (
<Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <VotingItem index={1} title={"Personal Carbon Credit"} />
    <VotingItem index={2} title={"Personal Improvement"} />
    <VotingItem index={3} title={"Among All Participants"} />
    <VotingItem index={4} title={"Among Profile"} />
    <SubmitButton />


</Layout>
);



export const BottomNavigationSimpleUsageShowcase = () => {

        const [selectedIndex, setSelectedIndex] = React.useState(0);
      
        return (
          <BottomNavigation
            selectedIndex={selectedIndex}
            onSelect={index => setSelectedIndex(index)}>
            <BottomNavigationTab title='Archieve'/>
            <BottomNavigationTab title='Emission'/>
            <BottomNavigationTab title='Vote'/>
            <BottomNavigationTab title='Home'/>
          </BottomNavigation>
        );
      };




const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center', 
          alignItems: 'center',
        },
        header :{
            height:80,width:380,
            marginTop:150,
            backgroundColor:'#F7F7F7',
            borderStyle:'solid',// 虚线 效果
            borderWidth:1, //虚线 线宽
            borderColor:'#F7F7F7', // 虚线颜色
            borderTopLeftRadius:30 ,//设置 圆角 
            borderTopRightRadius:30,
            borderBottomLeftRadius:30,
            borderBottomRightRadius:30,
            marginHorizontal:10,
            justifyContent: 'center', 
            alignItems: 'center',
            
            }
            ,
        body:{
          // backgroundColor: '#EEEEEE',
          // padding: 10,
          // marginHorizontal:5,
          // marginVertical:10,
          // marginTop:20,
          height:160,width:380,
          marginTop:10,
          marginBottom:40,
          marginHorizontal:10,
          backgroundColor:'#F7F7F7',
          borderStyle:'solid',// 虚线 效果
          borderWidth:1, //虚线 线宽
          borderColor:'#F7F7F7', // 虚线颜色
          borderTopLeftRadius:30,//设置 圆角 
          borderTopRightRadius:30,
          borderBottomLeftRadius:30,
          borderBottomRightRadius:30,
          justifyContent: 'center', 
          alignItems: 'center',

        },


        boldTextHeader:{
          fontWeight: 'bold',
          textAlign:'center',
          textAlignVertical:'center'

        },
        boldTextBody:{
          fontWeight: 'bold',
          textAlign:'center',
          textAlignVertical:'center'

        },
        slightTextBody:{
          marginTop: 30,
          marginBottom:30,
          textAlign:'center',
          textAlignVertical:'center'
          

        },
        Center:{
          marginTop: 50,

        },
        CenterText:{
          textAlign:'center',
          textAlignVertical:'center',
        },
        layout: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        votingBox: {
          marginTop: 10,
          height: 30,
          width: "75%",
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
          fontSize: 16,
        },
        submitButton: {
          width: 331,
          height: 50,
          marginTop: 10,
          backgroundColor: "#000000",
          borderRadius: 30,
          alignItems: "center",
        },
        submitButtonText: {
          fontFamily: "Helvetica",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: 20,
          lineHeight: 50,
          textAlign: "center",
          // letterSpacing: "-0.022em",
          color: "#FFFFFF",
        },

      });

      
export default () => (
 <ApplicationProvider {...eva} theme={eva.light}>
< HomeScreen />
< CenterText />
< LayoutLevelShowcase />
< BottomNavigationSimpleUsageShowcase />
</ApplicationProvider>

);