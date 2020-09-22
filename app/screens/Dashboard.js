import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import firebase from '../firebase/config';
import FriendsScreen from './FriendsScreen';

const DB = firebase.database();
const user = firebase.auth().currentUser;
let TransactionsList = {};
let TransactionDict = [];

// internally defined functions to handle the group based expenses
function GroupScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'mediumslateblue'}}>
      <Text style={{color: "darkslateblue", fontSize: 18, fontWeight: "bold"}}>Groups   </Text>
    </View>
  );
}


// This screen navigates between two halves - one where you see expense owed with friends and in the other you see expenses owed with a group
const Tab = createBottomTabNavigator();


// The main function which handles the navigator by defining the Bottom Tab Navigator
function Dashboard() {
  return (
      <Tab.Navigator tabBarOptions= {{style: {backgroundColor: 'darkslateblue'}}}>
        <Tab.Screen name="Friends" component={FriendsScreen} options={{tabBarOptions: {activeTintColor: 'slateblue',inactiveTintColor: 'mediumslateblue'},tabBarLabel: 'Friends', tabBarIcon: ({ color, size }) => <Ionicons name="md-person" size={32} color="mediumslateblue" />,}}/>
        <Tab.Screen name="Groups" component={GroupScreen} options={{tabBarOptions: {activeTintColor: 'slateblue',inactiveTintColor: 'mediumslateblue'},tabBarLabel: 'Groups', tabBarIcon: ({ color, size }) => <Ionicons name="md-people" size={32} color="mediumslateblue" />,}} />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    background:{
        justifyContent: "center",
        alignItems:"center",
    },
});

const friends_styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default Dashboard;
