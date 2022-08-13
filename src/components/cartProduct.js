import React, { useState,useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import QuantityBtns from './quantityBtns'
import { COLORS } from '../assets/theme'
import Ionicons from '@expo/vector-icons/Ionicons'

import { useDispatch } from 'react-redux'
import {removeFromCart, decreaseQuantity, increaseQuantity} from '../redux/cartSlice'

const CartProduct = ({item}) => {

    const [count, setcount] = useState(item.cartQuantity)
    const [price, setprice] = useState(item.price)

    




    // quantity buttons ------------------

    const quantityRemove = (item)=>{
        setcount(count-1)
        dispatch(decreaseQuantity(item))

    }

    const quantityAdd = (item)=>{
        setcount(count+1)
        dispatch(increaseQuantity(item))
    } 

    // ---------------------------------


    // redux

    const dispatch = useDispatch()

    const handleRemove= (item)=>{
        dispatch(removeFromCart(item))
    }

    //------------

    useEffect(() => {
        setprice(item.price*item.cartQuantity)

        if(price >= 100000)
        {
            const str = price.toString()
            if(price>=1000000)
            {
                const newstr = str.slice(0,2)
                setprice(`${newstr} lac`)
            }else{
                setprice(`${str[0]} lac`)
            }
        }

    }, [price, count])

    return (
        <View style={styles.container} >
            <Image source={item.image} style={styles.img} />
            <View style={styles.details}>
                <Text style={{fontSize: 20, color:COLORS.secondary}}>{item.title}</Text>
                
                <View style={{flexDirection: 'row'}}>

                    <View style={styles.qtView}>
                        <TouchableOpacity onPress={()=> quantityRemove(item)}>
                            <Ionicons name="md-remove" size={20} style={{color:COLORS.secondary}} />
                        </TouchableOpacity>

                        <Text style={{
                            color: COLORS.secondary, 
                            backgroundColor: COLORS.primaryLight,
                            height: 30,
                            width: 30,
                            paddingTop:6,
                            textAlign: 'center'
                        }}>{count}</Text>

                        <TouchableOpacity onPress={()=>quantityAdd(item)} >
                            <Ionicons name="md-add" size={20} style={{color: COLORS.secondary}} />
                        </TouchableOpacity>

                    </View>

                    <View style={styles.priceView}>
                        <Text style={styles.price}>Rs. {price}</Text>
                    </View>

                </View>

            </View>
            
            <TouchableOpacity style={styles.delete} onPress={()=>handleRemove(item)}>
                <Ionicons name="md-close" size={20} style={{color: COLORS.secondary}} />
            </TouchableOpacity>
        </View>
    )
}



const styles=StyleSheet.create({
    container:{
        height: 100,
        width: '90%',
        marginLeft: '5%',
        borderRadius: 20,
        paddingLeft: 10,
        marginTop: 20,
        flexDirection: 'row',
        position: 'relative',
        backgroundColor: COLORS.primaryLight
    },
    img:{
        width: 100,
        height: 100,
        resizeMode: 'cover'
    },
    details:{
        justifyContent:'center'
    },
    priceView:{
        width: 110,
        marginTop: 20,
        alignItems: 'center',
    },
    price:{
        fontSize: 18,
        color: COLORS.secondary,
    },
    delete:{
        backgroundColor: 'red',
        width: 30,
        height: '100%',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 0
    },qtView:{
        width: 100,
        height: 30,
        marginTop: 15,
        flexDirection: 'row',
        backgroundColor: COLORS.primary,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 50,
        paddingRight: 6,
        paddingLeft: 6
    },
})




export default CartProduct
