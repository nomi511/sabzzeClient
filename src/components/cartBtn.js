import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import {COLORS} from '../assets/theme'
import { useNavigation } from '@react-navigation/core'

import { useSelector } from 'react-redux'

const CartBtn = () => {
    const navigation = useNavigation()

    const cart = useSelector(state => state.cart.cartItems)
    let items = cart.length

    if(items > 10)
    {
        items = '10+'
    }

    return (
        <View style={styles.container}>
            <View style={styles.cartView}>
                <TouchableOpacity style={styles.cartStyle} onPress={()=>navigation.navigate('Cart')}>
                    <Ionicons name='md-cart' size={23} color='#455A64' style={styles.iconView}/>
                    <Text style={styles.cartTxt}>Cart</Text>
                </TouchableOpacity>
            </View>
            {
                items>0 && <View style={styles.cartitems}>
                <Text style={{color: COLORS.secondary}}>{items}</Text>
            </View>
            }
        </View>
    )
}


const styles= StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    cartView:{
        flexDirection:'row',
    },
    cartStyle:{
        width: 80,
        flexDirection: 'row',
    }
    ,
    iconView:{
        flex: 1,
    },
    cartTxt: {
        flex:1,
        fontSize: 15,
        fontWeight: 'bold',
        color: COLORS.secondary,
        paddingTop: 3,
        marginLeft: -25,
    },
    cartitems:{
        position:'absolute',
        backgroundColor: 'orange',
        top: 5,
        right: 70,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10

    }
})


export default CartBtn
