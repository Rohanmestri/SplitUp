import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function FriendsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Friends!</Text>
    </View>
  );
}

function GroupScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Group!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function Dashboard() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Friends" component={FriendsScreen} options={{ tabBarLabel: 'Friends', tabBarIcon: ({ color, size }) => <Ionicons name="md-person" size={32} color="silver" />,}}/>
        <Tab.Screen name="Groups" component={GroupScreen} options={{ tabBarLabel: 'Groups', tabBarIcon: ({ color, size }) => <Ionicons name="md-people" size={32} color="silver" />,}} />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    background:{
        justifyContent: "center",
        alignItems:"center"
    },
});

export default Dashboard;