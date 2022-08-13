import React from 'react'
import { View, TextInput, TouchableOpacity , StyleSheet} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import {COLORS} from '../assets/theme'
import { useNavigation } from '@react-navigation/core'

const SearchBar = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>

            <View style={styles.searchBar}>
                <TextInput style={styles.searchInput} placeholder="Search" onSubmitEditing={()=> navigation.navigate('Search')} />
                <TouchableOpacity style={styles.searchIcon} onPress={()=> navigation.navigate('Search')}>
                    <Ionicons name="md-search" size={25} color='#52DB8C' />
                </TouchableOpacity>
            </View>
            
        </View>
    )
}



const styles= StyleSheet.create({
    container: {
        flex: 1,
    },
    searchBar:{
        height: 70,
        alignItems:"center"

    },

    searchInput:{
        borderWidth: 2,
        height: 50,
        width: '90%',
        borderRadius: 50,
        borderColor: COLORS.primary,
        marginTop: 15,
        paddingLeft: 30,
        fontSize: 17
        
    },

    searchIcon:{
        position: 'absolute',
        top:26,
        right:40,
    },
})

export default SearchBar
