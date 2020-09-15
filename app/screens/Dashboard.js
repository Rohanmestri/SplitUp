import React from  "react";
import {Text, View, StyleSheet} from "react-native";

function Dashboard(props){
    return (
        <View style={styles.background}>
           <Text> Dashboard Page </Text>
        </View>    
    );
}

const styles = StyleSheet.create({
    background:{
        justifyContent: "center",
        alignItems:"center"
    },
});

export default Dashboard;