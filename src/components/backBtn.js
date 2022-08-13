import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import {COLORS} from '../assets/theme'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/core'

const BackBtn = () => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={()=> navigation.goBack()} style={styles.backBtn}>
            <Ionicons name="md-arrow-back" size={35} style={{color: COLORS.secondary}} />
        </TouchableOpacity>
    )
}


const styles=StyleSheet.create({
    backBtn:{
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '30%',
        marginLeft: 15,
    },
})

export default BackBtn
