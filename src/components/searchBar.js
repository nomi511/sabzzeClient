import React, {useState} from 'react'
import { View, TextInput, TouchableOpacity , StyleSheet, Alert} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import {COLORS} from '../assets/theme'
import { useNavigation } from '@react-navigation/core'

const SearchBar = () => {


    const [searchTxt, setsearchTxt] = useState('')


    const navigation = useNavigation()


    const navigateTo = (val)=>{
        if(searchTxt)
        {
            navigation.navigate(val)
        }else{
            Alert.alert('Empty Search', '\nPlease enter name of the product you are searching for...')
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.searchBar}>
                <TextInput 
                    style={styles.searchInput} 
                    placeholder="Search" 
                    onSubmitEditing={()=> navigateTo('Search')} 
                    value={searchTxt} 
                    onChangeText={txt=> setsearchTxt(txt)}
                />
                <TouchableOpacity style={styles.searchIcon} onPress={()=> navigateTo('Search')}>
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
        fontSize: 17,
        backgroundColor: COLORS.white
        
    },

    searchIcon:{
        position: 'absolute',
        top:26,
        right:40,
    },
})

export default SearchBar
