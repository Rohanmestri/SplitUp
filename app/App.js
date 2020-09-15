import * as React from "react";
import { View, Text, Image, TouchableHighlight, Button } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import MainStackNavigator from "./navigators/MainStackNavigator";

export default function App() {
  return <MainStackNavigator/>;
}
