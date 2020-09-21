import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
// import * as firebase from 'firebase';
import {WelcomeScreen} from '../screens/WelcomeScreen'
import firebase from '../firebase/config';


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

  LogIn = (email,password) => {
    //Firebase's signInWithEmailAndPassword function for signing in existing user
    try {
      firebase.auth()
      .signInWithEmailAndPassword(email,password)
      .then(res => {console.log(res.user.email); this.props.navigation.navigate('WelcomeScreen');});
    } catch (error) {
      console.log(error.toString(error));
      Alert.alert('Invalid Email ID or password');
    }
  }

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
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('SignupScreen')}
        >
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslateblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    position:"absolute",
    top: 50,
    alignItems: "center",
    width: 200,
    height: 200
  },
  inputView:{
    width:"80%",
    backgroundColor:"slateblue",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
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