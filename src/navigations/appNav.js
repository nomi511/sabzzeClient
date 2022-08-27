import React from 'react'
import { View, StyleSheet, StatusBar, Platform } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import {COLORS} from '../assets/theme'
import Constants  from 'expo-constants'

import TabNav from './TabNav'
import Search from '../screens/search'
import ProductDetail from '../screens/productDetail'
import Cart from '../screens/cart'
import Location from '../screens/location'
import OrderDetail from '../screens/orderDetail'
import Places from '../screens/places'

const Stack = createStackNavigator()

const AppNav = () => {

    const barHeight = Constants.statusBarHeight

    return (
        <View style={[styles.container,{paddingTop: barHeight}]}>

            <Stack.Navigator initialRouteName='TabNav' screenOptions={{headerShown: false}}>
                <Stack.Screen name='TabNav' component={TabNav} />
                <Stack.Screen name='Search' component={Search} />
                <Stack.Screen name='ProductDetail' component={ProductDetail} />
                <Stack.Screen name='Cart' component={Cart} />
                <Stack.Screen name='Location' component={Location} />
                <Stack.Screen name='OrderDetail' component={OrderDetail} />
                <Stack.Screen name='Places' component={Places} />
            </Stack.Navigator>

        </View>
        
    )
}




const styles=StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: COLORS.primary
    }
})



export default AppNav
