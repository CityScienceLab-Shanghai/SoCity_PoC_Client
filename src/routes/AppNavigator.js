import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EmissionScreen from "../views/EmissionScreen";
import AchieveScreen from "../views/AchieveScreen";
import HomeScreen from "../views/HomeScreen";
import VoteNavigator from "./VoteNavigator";
import {TabIcon1, TabIcon2, TabIcon3, TabIcon4} from "../components/TabIcon";

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: {
        paddingTop: 10,
        paddingBottom: 25,
        height:85,
        shadowOffset: {
          width: 0,
          height: -1,
        },
        shadowRadius: 3,
        shadowColor: "rgba(48, 48, 48, 0.0591947)",
        shadowOpacity: 1,
      },
    }}
  >
    <Tab.Screen
      name="Emission"
      component={EmissionScreen}
      options={{
        headerShown: false,
        tabBarLabel: "",
        tabBarIcon: ({ focused }) => <TabIcon1 focused={focused} />,
      }}
    />
    <Tab.Screen
      name="Achieve"
      component={AchieveScreen}
      options={{
        headerShown: false,
        tabBarLabel: "",
        tabBarIcon: ({ focused }) => <TabIcon2 focused={focused} />,
      }}
    />
    <Tab.Screen
      name="Vote"
      component={VoteNavigator}
      options={{
        headerShown: false,
        tabBarLabel: "",
        tabBarIcon: ({ focused }) => <TabIcon3 focused={focused} />,
      }}
    />
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
        tabBarLabel: "",
        tabBarIcon: ({ focused }) => <TabIcon4 focused={focused} />,
      }}
    />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);

export default AppNavigator;
