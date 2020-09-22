import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import {ListItem} from 'react-native-elements';
import firebase from '../firebase/config';

class FriendsScreen extends React.Component {
    state = {
        Transactions: [],
        FriendsDict: {},
    }
    constructor(props) {
        super(props);
    }

    DB = firebase.database();
    user = firebase.auth().currentUser;

    fetchData = (classobj) => {
        this.DB.ref('/'+this.user.uid+'/Friends').once('value',function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                friend = String(childSnapshot.val().Name)
                classobj.state.FriendsDict[friend] = 0;
            })
        })
    }

    fetchTransactions = (classobj) => {
        this.DB.ref('/'+this.user.uid+'/Transactions').once('value',function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                if (childSnapshot.val().Status == 'pending') {
                    classobj.state.FriendsDict[childSnapshot.val().UserName] += childSnapshot.val().Amount;
                }
            })
        })
        .then(() => {
            let tempArr = [];
            for (var key in classobj.state.FriendsDict) {
                tempArr.push({"Name":key, "Amount":classobj.state.FriendsDict[key]})
            }
            this.setState({Transactions:tempArr}, function() {
                console.log('Transactions: ',this.state.Transactions);
            });
        })
    }

    componentDidMount() {
        this.fetchData(this);
        this.fetchTransactions(this);
    }

    render() {
        return (
            <ListItem style={friends_styles.container}>
              <FlatList
                data={this.state.Transactions}

                renderItem={({item}) => 
                <ListItem 
                    style = {friends_styles.tag}
                    title = {
                        <Text style={friends_styles.text}>{item.Name} </Text>
                    }
                    subtitle = {<Text style={friends_styles.text}> ${item.Amount} </Text>}
                />
                }
              />
            </ListItem>
        );
    }
}

const styles = StyleSheet.create({
    background:{
        justifyContent: "center",
        alignItems:"center",
        backgroundColor:"mediumslateblue"
    },
});


const friends_styles = StyleSheet.create ({
    container: {
       flex: 1,
       paddingTop: 10,
       backgroundColor: 'white',
       alignItems: 'center',
    },
    text: {
       color: 'darkslateblue',
       fontSize: 24,
       fontWeight: 'bold'
    },
    tag: {
        borderWidth: 3,
        borderRadius: 10,
        borderColor: "darkslateblue",
        backgroundColor: "white",
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 5.
        
    },
 })  
export default FriendsScreen;
