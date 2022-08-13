import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {COLORS} from '../assets/theme'
import { BackBtn } from '../components'


const OrderDetail = () => {
    return (
        <View>

            <View style={styles.header}>
                <View style={{flex:2, marginTop: 5}}>
                    <BackBtn />
                </View>
                <Text style={styles.title}>Order Details</Text>
            </View>




            <Text>orderDetail</Text>

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
        flex:5,
        fontSize: 20,
        paddingLeft: 30,
        fontWeight: 'bold',
        paddingTop: 12,
        color: COLORS.secondary
    },
})

export default OrderDetail
