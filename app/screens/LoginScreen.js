import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
// import * as firebase from 'firebase';
import {WelcomeScreen} from '../screens/WelcomeScreen'
import firebase from '../firebase/config';


// Get the dimensions of the phone model to set the UI specific to the model
const {width, height} = Dimensions.get('window');


// Define the Class for the Login Screen
class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:"",
      password:""
    };
  }
  static navigationOptions = {
    headerShown: false
  }

  // To accept the login with the credentials present in the database.
  // If user not signed up, throw an exception
  LogIn = (email,password) => {
    //Firebase's signInWithEmailAndPassword function for signing in existing user
    try {
      firebase.auth()
      .signInWithEmailAndPassword(email,password)
      .then(res => {console.log(res.user.email); this.props.navigation.navigate('WelcomeScreen');});
    } catch (error) {
      console.log(error.toString(error));
    }
  }

  // Render the UI
  render(){
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/Splitup.jpg")}/>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            onChangeText={email => this.setState({email})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput 
          secureTextEntry={true}
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          onChangeText={password => this.setState({password})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => this.LogIn(this.state.email,this.state.password)}
        >
          <Text style={{color:"white"}}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('SignupScreen')}
        >
          <Text style={{color:"darkslateblue"}}>SIGNUP</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LoginScreen;

// Define the Stylesheet for the UI of this screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Math.floor(height/3),
  },
  logo: {
    position:"absolute",
    top: Math.floor(height/5),
    alignItems: "center",
    width: Math.floor(height/4),
    height: Math.floor(height/4),
    borderRadius:25,
    borderColor:"darkslateblue",
    borderWidth:1,

  },
  inputView:{
    width:"80%",
    backgroundColor:"white",
    borderRadius:25,
    borderColor:"darkslateblue",
    borderWidth:5,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"darkslateblue"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"darkslateblue",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
});
