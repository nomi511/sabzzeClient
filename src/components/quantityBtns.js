import React, {useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import {COLORS} from '../assets/theme'
import Ionicons from '@expo/vector-icons/Ionicons'

const QuantityBtns = ({count,setcount, add, remove }) => {

    
    const [checkdisable, setdisable] = useState(false)

    const quantityRemove = ()=>{
        
        if(count <= 1)
        {
            setdisable(true)
        }else
        {
            setdisable(false)
            setcount(count-1)
        }

    }

    const quantityAdd = ()=>{
        setdisable(false)
        setcount(count+1)
    } 

    return (
        <View style={styles.qtView}>
            <TouchableOpacity onPress={()=> quantityRemove()} disabled={checkdisable}>
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

            <TouchableOpacity onPress={()=>quantityAdd()} >
                <Ionicons name="md-add" size={20} style={{color: COLORS.secondary}} />
            </TouchableOpacity>

        </View>
    )
}


const styles=StyleSheet.create({
    qtView:{
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

export default QuantityBtns
