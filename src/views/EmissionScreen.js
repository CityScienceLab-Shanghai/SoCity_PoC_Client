import React from "react";
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Text,
  Button,
  ApplicationProvider,
} from "@ui-kitten/components";
import CarbonMap from '../components/CarbonMap'

const EmissionScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">EmissionScreen</Text>
    <CarbonMap/>
  </Layout>
);

export default EmissionScreen;