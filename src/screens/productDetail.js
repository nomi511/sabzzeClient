import React, {useState} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Platform, Alert} from 'react-native'
import {COLORS} from '../assets/theme'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/core'
import { BackBtn, QuantityBtns } from '../components'

import { useDispatch } from 'react-redux'
import {addToCart} from '../redux/cartSlice'


const ProductDetail = ({route}) => {

    const navigation = useNavigation();
    const {item} = route.params.item
    const {title, image, price, quantity_type, description} = item
    const [liked, setliked] = useState(false)

    // product quantity in cart
    const [count, setcount] = useState(1)
    
    // ^^^^^^^^^^^ product quantity in cart ^^^^^^^^^
  
    
    // redux

    const dispatch = useDispatch()

    const handleCart = (item) => {

        const tmpitem = {...item, cartQuantity: count}
        dispatch( addToCart(tmpitem) )
        Alert.alert("Success", "Product Successfully added to Cart", [{text: "Ok"}])
    }

    // -----------------------
    

    return (
            <View style={styles.container}>

                <View style={styles.backBtn} >
                    <BackBtn />
                </View>

                <ScrollView 
                    style={{flex: 1}}
                    alwaysBounceVertical={false}
                    alwaysBounceHorizontal={false}
                    bounces={false}
                >

                    <View style={styles.img}>
                        <Image source={image} style={{flex: 1,width: '100%', height:'100%', resizeMode: 'contain'}} />
                    </View>

                    <View style={styles.detail}>

                        <Text style={styles.title}>{title}</Text>

                        <View style={styles.priceQt}>
                            <View style={styles.priceView} >
                                <Text style={styles.price}>Rs: {price}</Text>
                                <Text style={styles.qtType}>Price/{quantity_type}</Text>
                            </View>

                            
                            <QuantityBtns count={count} setcount={setcount} />

                        </View>

                        <Text style={{
                            color: COLORS.secondary,
                            fontSize: 20,
                            textAlign: 'justify'
                        }}>{description}</Text>

                    </View>
                
                </ScrollView>

                <View style={styles.bottomBtns}>
                    <TouchableOpacity onPress={()=> setliked(!liked)}>
                        <Ionicons name="md-heart" size={35} style={{color: (liked? 'red': COLORS.secondary), marginTop: 5}} />
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.cartBtn} onPress={()=>handleCart(item)}>
                        <Text style={{color: COLORS.white, fontSize: 20}}>ADD TO CART</Text>
                    </TouchableOpacity>
                </View>

            </View>
    )
}






const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.primaryLight,
        justifyContent: 'center',
        position: 'relative',
    },
    backBtn:{
        width: 100,
        position: 'absolute',
        top: 10,
        zIndex: 5,
        elevation: (Platform.OS === 'android'? 5: 0)

    },
    img:{
        height: 350,
        backgroundColor: COLORS.primaryLight
    },
    detail:{
        shadowOffset: {width: 1, height: 2},
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        elevation: 25,


        backgroundColor: COLORS.white,
        marginTop: -30,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        padding: 40,
        paddingBottom: 110,
        alignItems: 'center',
        flex: 1,
        minHeight: 475,
        position: 'relative',

    },

    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: COLORS.primary,
        marginTop: -10
    },
    priceQt:{
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    priceView:{
        flex: 1,
        paddingTop: 10

    },
    price:{
        fontSize: 20,
        fontWeight: '700',
        color: COLORS.secondary
    },
    qtType: {
        fontSize: 13,
        color: COLORS.secondary
    },


    bottomBtns: {
        flex: 0,
        flexDirection: 'row',
        marginLeft: '12%',
        justifyContent:'space-around',
        position: 'absolute',
        bottom: 30,
        marginTop: 30
    },
    cartBtn:{
        backgroundColor: COLORS.primary,
        width: 200,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '10%'
    }

})




export default ProductDetail
