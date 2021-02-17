import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./src/screens/HomeScreen";
import InfoStack from "./src/screens/InfoListScreen";
import CameraScreen from "./src/screens/CameraScreen";
import DiaryScreen from "./src/screens/DiaryScreen";
import SendScreen from "./src/screens/SendScreen";
import {createStackNavigator} from "@react-navigation/stack";
import Homunc4 from "./src/screens/Homunc4";
import CloseHomunc from "./src/screens/CloseHomunc";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name = "Home" component = {HomeStack} />
      <Tab.Screen name = "Info" component = {InfoStack} />
      <Tab.Screen name = "Camera" component = {CameraScreen} />
      <Tab.Screen name = "Diary" component = {DiaryScreen} />
      <Tab.Screen name = "Send" component = {SendScreen} />
      <Tab.Screen name = ":(" component = {Homunc4} />
      <Tab.Screen name = ":)" component = {CloseHomunc} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
      {/*<Stack.Navigator initialRouteName="Home">*/}
      {/*    <Stack.Screen name="Homunculous" component={Homunculous} />*/}
      {/*</Stack.Navigator>*/}
    </NavigationContainer>
  );
};

export default App;

