import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Link } from '@react-navigation/native'
import {COLORS} from '../assets/theme'

export default function button({title, page, bgcolor}) {
    
    return (
        
            <TouchableOpacity>
                <Link to={{screen:`${page}`}} style={{marginTop:30}}>
                    <View style={[styles.btnView,{backgroundColor: bgcolor}]}>
                        <Text style={[
                            styles.btnText, 
                            {color:(bgcolor==='orange'? COLORS.white:COLORS.secondary)
                        }]}
                        >{title}</Text>
                    </View>
                </Link>
            </TouchableOpacity>
        
    )
}


const styles = StyleSheet.create({
    btnView:{
        height: 50,
        width: 150,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
    },
    btnText:{
        color: 'white',
        fontSize:17
    }
})