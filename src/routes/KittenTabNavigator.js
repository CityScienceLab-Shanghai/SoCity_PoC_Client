import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";
import EmissionScreen from "../views/EmissionScreen";
import AchieveScreen from "../views/AchieveScreen";
import HomeScreen from "../views/HomeScreen";
import VoteScreen from "../views/VoteScreen";
import VoteNavigator from "./VoteNavigator";

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="Emission" />
    <BottomNavigationTab title="Achieve" />
    <BottomNavigationTab title="Vote" />
    <BottomNavigationTab title="Home" />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="Emission" component={EmissionScreen} />
    <Screen name="Achieve" component={AchieveScreen} />
    <Screen name="Vote" component={VoteNavigator} />
    <Screen name="Home" component={HomeScreen} />
  </Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);

export default AppNavigator;
