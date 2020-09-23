import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import * as firebase from 'firebase';

// Get the dimensions of the phone model to set the UI according to the specific model.
const {width, height} = Dimensions.get('window');

// Define the class for the Signup Screen
class SignUpScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:"",
      password:"",
      firstName: "",
      lastName: "",
    };
  }
  static navigationOptions = {
    headerShown: false
  }

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

  SignUp = (email,password) => {
    //Firebase's createUserWithEmailAndPassword function for signing in existing user
    try {
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(function (){
          user = firebase.auth().currentUser;
        })
        .then(() => {user.updateProfile({
            displayName: this.state.firstName,
        })})
        .then(() => this.LogIn(email,password))
      }
    catch (error) {
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
            placeholder="First Name..."
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({firstName:text})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Last Name..."
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({lastName:text})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            onChangeText={email => this.setState({email:email})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput 
          secureTextEntry={true}
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          onChangeText={password => this.setState({password:password})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => this.SignUp(this.state.email,this.state.password)}
        >
          <Text style={{color: "white"}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SignUpScreen;

// Create the Stylesheet for the UI of this screen
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
    top: Math.floor(height/7),
    alignItems: "center",
    width: Math.floor(height/4),
    height: Math.floor(height/4),
    borderRadius:25,
    borderColor:"darkslateblue",
    borderWidth:1,
  },
  inputView:{
    width:"70%",
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
    backgroundColor:"mediumslateblue",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
});
