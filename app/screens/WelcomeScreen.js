import React from  "react";
import {ImageBackground, Text, View, StyleSheet, Image, TouchableOpacity, Dimensions} from "react-native";
import * as Permissions from "expo-permissions";

const {width, height} = Dimensions.get('window');


class WelcomeScreen extends React.Component{
    constructor(props) {
        super(props);
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
        )
    }
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent: "flex-end",
        backgroundColor: 'white',
        alignItems:"center"
    },
    expenseButton:{
        width:'80%',
        height: 70,
        backgroundColor: "slateblue",
        borderColor: 'slateblue',
        borderWidth: 2, 
        borderRadius: 20,
        marginBottom: Math.floor(height/80)
    },
    expenseButtonText:{
        fontSize:30,
        color:"white",
        top: 10,
        left: 50
    },
    expenseButton2:{
        width:'80%',
        height: 70,
        backgroundColor: "darkslateblue",
        borderColor: 'darkslateblue',
        borderWidth: 2, 
        borderRadius: 20,
        marginBottom: Math.floor(height/10)
    },
    expenseButtonText2:{
        fontSize:30,
        color:"white",
        top: 10,
        left: 60
    },
    logo:{
        width: Math.floor(height/3.5),
        height: Math.floor(height/3.5),
        borderColor:'darkslateblue',
        borderWidth: 2, 
        borderRadius: 20
    },

    logoContainer:{
        position:"absolute",
        top: Math.floor(height/4),
        alignItems: "center"
    },

    slogan:{
        fontSize:30,
        color:"slateblue",
        fontWeight: "bold"
    }
});

export default WelcomeScreen;