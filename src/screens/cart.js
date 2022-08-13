import React, {useEffect} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import {COLORS} from '../assets/theme'
import { BackBtn, CartProduct, Button } from '../components'

import { useSelector, useDispatch } from 'react-redux'
import { cartTotals } from '../redux/cartSlice'

const Cart = () => {

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const {cartItems, cartTotalQuantity, cartTotalWeight, cartTotalAmount} = cart



    useEffect(() => {
        
        dispatch(cartTotals())

    }, [cart])

    return (
        <View style={{flex: 1, backgroundColor: COLORS.white}}>
            <View style={styles.header}>
                <BackBtn />
                <Text style={styles.title}>Cart</Text>
            </View>

            {
                (cartItems.length > 0)? <>
                    <View style={{height: '55%', paddingBottom: 20}}>
                        <ScrollView>
                            {
                                cartItems.map((item)=>(
                                    <CartProduct item={item} key={item.id}/>
                                ))
                            }
                        </ScrollView>
                    </View>
                    
                    <View style={styles.totals}>
                        <View style={styles.totalsData}>
                            <View style={styles.totalsView}>
                                <Text style={styles.totalsTxt1}>Total Items</Text>
                                <Text style={styles.totalsTxt2}>{cartTotalQuantity}</Text>
                            </View>

                            <View style={styles.totalsView}>
                                <Text style={styles.totalsTxt1}>Total Weight</Text>
                                <Text style={styles.totalsTxt2}>{cartTotalWeight} kg</Text>
                            </View>

                            <View style={[styles.totalsView, {borderBottomWidth: 2}]}>
                                <Text style={styles.totalsTxt1}>Price</Text>
                                <Text style={styles.totalsTxt2}>Rs. {cartTotalAmount}</Text>
                            </View>

                            <View style={styles.totalsView}>
                                <Text style={[styles.totalsTxt1, {fontWeight: 'bold'}]}>Total Price</Text>
                                <Text style={[styles.totalsTxt1, {fontWeight: 'bold'}]}>Rs. {cartTotalAmount}</Text>
                            </View>
                        </View>
                        
                        <View style={{position: 'absolute', bottom: 100}}>
                            <Button title="Checkout" page="Location" bgcolor={COLORS.primary}/>
                        </View>
                        
                    </View>

                </>: <View style={styles.emptyView}>
                        <Text style={styles.emptytxt}>Cart is Empty</Text>
                    </View>
            }

        </View>
    )
}


const styles=StyleSheet.create({
    header:{
        height: 50,
        backgroundColor: COLORS.primary,
        flexDirection: 'row',
    },
    title:{
        flex:3,
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 13,
        paddingLeft: 40,
        color: COLORS.secondary
    },
    totals:{
        height: '45%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        alignItems: 'center',
        backgroundColor: COLORS.primaryLight
    },
    totalsData: {
        width: '80%',
        paddingTop: 20,
    },
    totalsView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    totalsTxt1:{
        fontSize: 15,
        color: COLORS.secondary
    },
    totalsTxt2: {
        fontSize: 15,
        color: COLORS.secondary
    },
    emptyView:{
        height: '100%',
        marginTop: '50%',
        alignItems: 'center'
    },
    emptytxt: {
        fontSize: 25,
        color: COLORS.secondary,
    }
})

export default Cart
