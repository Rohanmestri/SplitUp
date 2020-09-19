import React from  "react";
import {ImageBackground, Text, View, StyleSheet, Image, TouchableOpacity} from "react-native";
import * as Permissions from "expo-permissions";


class WelcomeScreen extends React.Component{
    constructor(props) {
        super(props)
    }

    getAudioPermission = async() => {
        const { status: existingStatus } = await Permissions.getAsync(Permissions.AUDIO_RECORDING);
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get permission for audio recording');
            return;
        }
        console.log(finalStatus);
    }

    componentDidMount() {
        this.getAudioPermission();
    }

    render() {
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
                  onPress={() => this.props.navigation.navigate('AddExpense')}>
                  <Text style={styles.expenseButtonText}>Add New Expense</Text>
                </TouchableOpacity>
    
                <TouchableOpacity
                  style={styles.expenseButton2}
                  onPress={() => this.props.navigation.navigate('Dashboard')}>
                  <Text style={styles.expenseButtonText2}>View Expenses</Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
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