import React from  "react";
import {Text, View, StyleSheet} from "react-native";

function AddExpense(props){
    return (
        <View style={styles.background}>
           <Text style={styles.slogan}> Add Expense Page </Text>
        </View>    
    );
}

const styles = StyleSheet.create({
    background:{
        justifyContent: "center",
        alignItems:"center"
    },
});

export default AddExpense;