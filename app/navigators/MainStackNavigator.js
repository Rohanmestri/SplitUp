import * as React from 'react'
import {NavifgationContainer, NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import LoginScreen from '../screens/LoginScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import SignupScreen from '../screens/SignupScreen'
import AddExpense from '../screens/AddExpense'
import Dashboard from '../screens/Dashboard'

const Stack = createStackNavigator()

function MainStackNavigator(){
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName = 'LoginScreen'>
                <Stack.Screen options={{headerShown: false}} name='LoginScreen' component={LoginScreen} />
                <Stack.Screen options={{headerShown: false}} name='WelcomeScreen' component={WelcomeScreen} />
                <Stack.Screen options={{headerShown: false}} name='AddExpense' component={AddExpense} />
                <Stack.Screen options={{headerShown: false}} name='Dashboard' component={Dashboard} />
                <Stack.Screen options={{headerShown: false}} name='SignupScreen' component={SignupScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator;