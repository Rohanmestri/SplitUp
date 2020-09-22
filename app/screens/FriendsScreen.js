import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Dimensions } from 'react-native';
import {ListItem} from 'react-native-elements';
import firebase from '../firebase/config';

const {width, height} = Dimensions.get('window');


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
            <View style={{flex: 1}}>
                <View style={friends_styles.header}>
                    <Text style = {{fontSize: 25, color: 'darkslateblue', fontWeight: 'bold', alignSelf: 'center', marginTop: 20}}>
                        Friends
                    </Text>
                </View>
                <View style={friends_styles.container}>
                    <FlatList
                        data={this.state.Transactions}
                        renderItem={({item}) => 
                            <ListItem 
                                style = {friends_styles.tag}
                                title = {
                                    <Text style={friends_styles.text}>{item.Name} </Text>
                                }
                                subtitle = {() => {
                                    if (item.Amount > 0) {
                                        return (
                                            <Text style={friends_styles.subtitle}> You are owed ${item.Amount} </Text>
                                        )
                                    }
                                    else if (item.Amount < 0) {
                                        return (
                                            <Text style={friends_styles.subtitle}> You owe ${-item.Amount} </Text>
                                        )
                                    }
                                    else {
                                        return (
                                            <Text style={friends_styles.subtitle}> No action required </Text>
                                        )
                                    }
                                }}
                            />
                        }
                    />
                </View>
            </View>
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
    header: {
        flex: 1,
        borderBottomColor: "darkslateblue",
        alignSelf: 'flex-start',
        width: '100%',
        marginBottom: 20,
        borderBottomWidth: 3,
    },
    container: {
        alignSelf: 'center',
        width: '95%',
        flex: 5
    },
    text: {
       color: 'darkslateblue',
       fontSize: 16,
       fontWeight: 'bold'
    },
    subtitle: {
        color: 'darkslateblue',
        fontSize: 16,
     },
    tag: {
        borderWidth: 3,
        borderRadius: 10,
        borderColor: "darkslateblue",
        backgroundColor: "white",
        // paddingLeft: 50,
        // paddingRight: 50,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 5,
        height: Math.floor(height/10),
        width: '100%',
        alignSelf: 'center',
    },
 })

export default FriendsScreen;
