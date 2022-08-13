import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Login, Register, ConfirmOTP } from '../screens/auth';
import TabNav from './TabNav'
import AppNav from './appNav'

const Stack = createStackNavigator();

export default function authNav() {

    const [user, setuser] = useState(true)

    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
                {!user? (<>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="ConfirmOTP" component={ConfirmOTP} />
                </>) : (<Stack.Screen name="Home" component={AppNav}/>) 
                }
            </Stack.Navigator>

        </NavigationContainer>
    )
}
