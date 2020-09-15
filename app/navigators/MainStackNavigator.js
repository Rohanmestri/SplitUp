import * as React from 'react'
import {NavifgationContainer, NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import WelcomeScreen from '../screens/WelcomeScreen'
import AddExpense from '../screens/AddExpense'
import Dashboard from '../screens/Dashboard'

const Stack = createStackNavigator()

function MainStackNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName = 'Welcome'>
                <Stack.Screen options={{headerShown: false}} name="Welcome" component={WelcomeScreen}/> 
                <Stack.Screen name="AddExpense" component={AddExpense}/>
                <Stack.Screen name="Dashboard" component={Dashboard}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator;