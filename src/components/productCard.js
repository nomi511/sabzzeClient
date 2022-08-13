import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import {COLORS} from '../assets/theme'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/core'

import { useDispatch } from 'react-redux'
import {addToCart} from '../redux/cartSlice'

const ProductCard = ({Product}) => {

    const navigation = useNavigation()

    // redux

    const dispatch = useDispatch()

    const handleCart = (item) => {

        const temp = {...item, cartQuantity: 1}
        dispatch( addToCart(temp) )

        Alert.alert("Success", "Product Successfully added to Cart", [{text: "Ok"}])
    }

    // -----------------------

        
    return (
        <View>
            
            <TouchableOpacity onPress={()=>navigation.navigate('ProductDetail', {item:{item:Product}})} style={styles.container} >

                <View style={styles.imgView}>
                    <Image source={Product.image} style={{width: '100%', height: '100%', resizeMode: 'cover'}} />
                </View>
                <View style={styles.titleView}>
                    <Text style={{
                        fontWeight: 'bold', 
                        fontSize:18, 
                        marginTop: -5,
                        marginBottom: 8,
                        color: COLORS.secondary

                    }}>{Product.title}</Text>

                    <View style={styles.priceView}>
                        <Text style={{
                            fontWeight: 'bold', 
                            fontSize: 16, color: 
                            COLORS.primary
                        }}>Rs: 200</Text>

                        <Text style={{
                            color: COLORS.secondary, 
                            marginTop: 3,
                            fontSize: 12,
                        }} >/{Product.quantity_type}</Text>

                    </View>

                    
                </View>

            </TouchableOpacity>

            <TouchableOpacity style={styles.cartBtn} onPress={()=>handleCart(Product)}>
                <Ionicons name='md-cart' size={20} style={{color: COLORS.primaryLight}} />
            </TouchableOpacity>
            
        </View>
    )
}


const styles=StyleSheet.create({
    container:{

        shadowOffset: {width: 1, height: 2},
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        elevation: 2,

        height: 200,
        width: 160,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: (COLORS.primaryLight),
        position: 'relative'
        
    },
    imgView:{
        height: 140,
        width: 160,
        justifyContent:'center',
        alignItems:'center'
    },
    titleView: {
        marginLeft: 10
    }
    ,
    priceView: {
        flexDirection: 'row',
    },
    cartBtn:{
        backgroundColor: COLORS.primary,
        height: 30,
        width: 45,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        top: 15,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20
    },
})

export default ProductCard
