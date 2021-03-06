import React from "react";
import { StyleSheet, Alert } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import UserScreen from "../screens/UserScreen";
import UserProfile from "../screens/UserProfile";
import HeaderText from "../components/HeaderText";
import HeaderButton from "../components/HeaderButton"
import SettingsButton from "../components/SettingsButton"

const Stack = createStackNavigator()

const HomeStack = () => {
  const HomeHelp = () => {
      Alert.alert("Help", "\nThis is the homepage of the app.\n\nYou can personalise your information by "+
      "clicking on the user icon opposite the help button.\n\nThis page gives you access to the SCaRF charity website "+
      "with the bottom left box, as well as their donation page, on the right.");
  };

  const UserHelp = () => {
    Alert.alert("Help", "\nHere you can view your personal information stored in the app.\n\nPress any of the boxes to make"+
        " changes and then press Next at the bottom to update these changes.\n\nAny information you add to"
      +" this app will be stored locally on your phone so only you have access to it.");
  };

  const RiskHelp = () => {
      Alert.alert("Help", "\nHere you can answer 9 questions, that check your risk factors for skin cancer. \n\n" +
          "Click on the drop down menu, select the most appropriate option and then click 'Next question'." +
          " When you have finished, click 'Finish' to save your answers. You can change your answers at any time. \n\n" +
          "All data will be stored locally on your phone so only you have access to it.");
  };

  return(
    <Stack.Navigator
      screenOptions = {{
        headerStyle: styles.header,
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name = "HomeScreen"
        component = {HomeScreen}
        options = {{
          title: "Home",
          headerLeft: props => <SettingsButton {...props} />,
          headerTitle: props => <HeaderText {...props} />,
          headerRight: props => <HeaderButton {...props} onPressFunction = {HomeHelp} />,
        }}
      />
      <Stack.Screen
        name = "UserScreen"
        component = {UserScreen}
        options = {{
          title: "User Info",
          headerTitle: props => <HeaderText {...props} />,
          headerRight: props => <HeaderButton {...props} onPressFunction = {UserHelp} />,
        }}
      />
      <Stack.Screen
        name = "RiskFactorsScreen"
        component = {UserProfile}
        options = {{
            title: "User Info",
            headerTitle: props => <HeaderText {...props} />,
            headerRight: props => <HeaderButton {...props} onPressFunction = {RiskHelp} />,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#71A1D1",
  }
});

export default HomeStack;
