import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import {COLORS} from '../assets/theme'
import { Link } from '@react-navigation/native'

const LinkBtn = ({item}) => {
    return (
        <TouchableOpacity >
            <Image source={item.image} style={styles.listImage} />
            <Text style={styles.listTitle}>{item.title}</Text>
        </TouchableOpacity>
    )
}


const styles=StyleSheet.create({
    toplist:{
        paddingTop: 15,
        marginRight: 20,
        alignItems: 'center'

    },
    listImage:{
        width: 65,
        height: 65,
        borderRadius: 20,
        resizeMode: 'cover'

    },
    listTitle:{
        fontSize: 15,
        marginTop: 5,
        textAlign: 'center',
        color: COLORS.secondary
    },


})

export default LinkBtn
