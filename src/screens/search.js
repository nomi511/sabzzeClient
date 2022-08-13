import React, {useState} from 'react'
import { View, Text, TouchableOpacity,StyleSheet, ScrollView} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import {COLORS} from '../assets/theme'
import { useNavigation } from '@react-navigation/core'
import { SearchBar, ProductsScrollView, BackBtn } from '../components'
import {PRODUCTS} from '../assets/data/products'

const Search = () => {

    const navigation = useNavigation()

    const [total, settotal] = useState(0)

    return (
        <View style={styles.container}>

            

            <View style={styles.header}>
                
                <BackBtn />

                <Text style={styles.title}>Search Result</Text>
                
            </View>

            <ScrollView
                alwaysBounceVertical={false}
                alwaysBounceHorizontal={false}
                bounces={false}
            >
                
                <SearchBar />

                <Text style={{
                    color: COLORS.secondary,
                    marginLeft: 20,
                    marginTop: 20,
                    fontWeight: 'bold'
                }}>{PRODUCTS.length} Products Found</Text>

                <ProductsScrollView products={PRODUCTS}/>

            </ScrollView>

            



        </View>
    )
}




const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.white
    },
    header:{
        flexDirection: 'row',
        backgroundColor: COLORS.primary,
        height: 50,
    },
    title:{
        width:  '70%',
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.secondary,
        marginTop: 10,
        alignItems: 'flex-start',
    },
    inputArea:{
        width: '90%',
        height: 50,
        paddingLeft: 30,
        fontSize: 17,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: COLORS.primary,
        marginLeft: '5%',
        marginTop: 15
    },

})





export default Search
