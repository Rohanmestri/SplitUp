import React from  "react";
import {ImageBackground, Text, View, StyleSheet, Image, TouchableOpacity} from "react-native";

function WelcomeScreen(props){
    const { navigation } = props
    return (
        <ImageBackground
           style = {styles.background}
        >
           <View style={styles.logoContainer}>
              <Image style={styles.logo} source={require("../assets/Splitup.jpg")}/>
              <Text style={styles.slogan}> Split your Bills! </Text>
           </View>    

           <TouchableOpacity
              style={styles.expenseButton}
              onPress={() => navigation.navigate('AddExpense')}>
              <Text style={styles.expenseButtonText}>Add New Expense</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.expenseButton2}
              onPress={() => navigation.navigate('Dashboard')}>
              <Text style={styles.expenseButtonText2}>View Expenses</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent: "flex-end",
        backgroundColor: 'darkslateblue',
        alignItems:"center"
    },
    expenseButton:{
        width:'100%',
        height: 70,
        backgroundColor: "mediumslateblue"
    },
    expenseButtonText:{
        fontFamily: 'serif',
        fontSize:30,
        color:"darkslateblue",
        top: 10,
        left: 70
    },
    expenseButton2:{
        width:'100%',
        height: 70,
        backgroundColor: "mediumslateblue"
    },
    expenseButtonText2:{
        fontFamily: 'serif',
        fontSize:30,
        color:"darkslateblue",
        top: 10,
        left: 90
    },
    logo:{
        width: 250,
        height:250,
    },

    logoContainer:{
        position:"absolute",
        top: 240,
        alignItems: "center"
    },

    slogan:{
        fontFamily: 'serif',
        fontSize:40,
        color:"mediumslateblue"
    }
});

export default WelcomeScreen;