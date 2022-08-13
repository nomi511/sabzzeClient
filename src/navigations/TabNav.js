import React, {useState} from 'react'
import { View, StatusBar, StyleSheet, Keyboard } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'
import {COLORS} from '../assets/theme'

import Home from '../screens/home'
import Orders from '../screens/orders'
import Products from '../screens/products'
import Liked from '../screens/liked'
import Profile from '../screens/profile'


const Tab = createBottomTabNavigator();

const TabNav = () => {
    const [showkeyboard, setkeyboard] =useState(false)

    Keyboard.addListener('keyboardDidShow', ()=>setkeyboard(true))
    Keyboard.addListener('keyboardDidHide', ()=> setkeyboard(false))

    return (
        <View style={styles.container}>

            
            <Tab.Navigator initialState="Home" screenOptions={{ 
                headerShown:false,
                tabBarStyle: {
                    backgroundColor: COLORS.primary,
                    display: showkeyboard? 'none': 'flex'
                    
                },
                tabBarShowLabel: false,

                }}>

                <Tab.Screen name="Home" component={Home} options={{
                    tabBarIcon: ({focused})=> (<Ionicons name="md-home" size={24} color={focused? COLORS.primaryLight: COLORS.secondary}/>),
                }} />
                <Tab.Screen name="Orders" component={Orders} options={{
                    tabBarIcon: ({focused})=> (<Ionicons name="md-clipboard" size={24} color={focused? COLORS.primaryLight: COLORS.secondary}/>)
                }}/>
                <Tab.Screen name="Products" component={Products} options={{
                    tabBarIcon: ({focused})=> (<Ionicons name="md-apps" size={24} color={focused? COLORS.primaryLight: COLORS.secondary}/>)
                }}/>
                <Tab.Screen name="Liked" component={Liked} options={{
                    tabBarIcon: ({focused})=> (<Ionicons name="md-heart" size={24} color={focused? COLORS.primaryLight: COLORS.secondary}/>)
                }}/>
                <Tab.Screen name="Profile" component={Profile} options={{
                    tabBarIcon: ({focused})=> (<Ionicons name="md-person" size={24} color={focused? COLORS.primaryLight: COLORS.secondary}/>)
                }}/>
            </Tab.Navigator>


        </View>
    )
}


const styles=StyleSheet.create({
    container: {
        flex:1,
    }
})

export default TabNav
