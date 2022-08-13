import 'react-native-gesture-handler'
import React, {useRef, useState} from 'react'
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import {COLORS} from '../assets/theme'
import BottomSheet from '@gorhom/bottom-sheet'

const Filter = () => {


    return (
        <View style={styles.filterView}>
                <Ionicons name="md-filter" size={25} style={{color: COLORS.secondary}} />
                <Text style={styles.filter}>Filter</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    filterView: {
        flexDirection: 'row',
        marginLeft: 25,
        marginTop: 10
    },
    filter:{
        fontSize: 15,
        fontWeight: 'bold',
        color: COLORS.secondary,
        marginLeft: 5,
        paddingTop: 3
    }
})



export default Filter
