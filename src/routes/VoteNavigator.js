import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SubmitScreen from "../views/SubmitScreen";
import VoteScreen from "../views/VoteScreen"; 

const Stack = createNativeStackNavigator();

const VoteNavigator = () => (
  <Stack.Navigator >
    <Stack.Screen name="Vote" component={VoteScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="Submit" component={SubmitScreen} options={{ headerShown: false }}/>
  </Stack.Navigator>
);

export default VoteNavigator;
