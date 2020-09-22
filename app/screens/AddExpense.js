import React from  "react";
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Dimensions, Alert} from "react-native";
import firebase from '../firebase/config';

const {width, height} = Dimensions.get('window');


class AddExpense extends React.Component{
    state = {
        text: ''
    }
    constructor(props) {
        super(props);
    }
    user = firebase.auth().currentUser;

    sendTextToServer = text => {
        fetch('http://192.168.1.27:5000/SaveText',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                text: text,
                user: this.user.uid,
                userName: this.user.displayName,
            })
        }).then((res) => res.json)
        .catch(error => console.log(error))
        Alert.alert('Expense added');
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.background}>
                <TextInput style={{fontSize: 15, width: '80%',height: 40, color: 'black'}}
                    placeholder='Use Keyboard mic or type expense...'
                    placeholderTextColor="#003f5c"
                    onChangeText={input => this.setState({text: input})}
                />
                <TouchableOpacity
                    onPress = {() => this.sendTextToServer(this.state.text)}
                    style = {styles.SubmitButton}
                >
                    <Text>
                        Add Expense
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background:{
        justifyContent: "center",
        alignItems:"center",
        marginTop: Math.floor(height/10),
    },
    inputText: {
        color: 'white',
        height: 10,
        marginTop: Math.floor(height/10),
    },
    SubmitButton:{
        width:"80%",
        backgroundColor:"#6495ed",
        borderRadius:25,
        height:40,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        marginBottom:10
      },
});

export default AddExpense;