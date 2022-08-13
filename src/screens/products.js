import React, {useRef, useState, useCallback} from 'react'
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity, Modal } from 'react-native'
import {COLORS} from '../assets/theme'
import Ionicons from '@expo/vector-icons/Ionicons'
import {CartBtn, SearchBar, LinkBtn, ProductsScrollView, Filter, FilterSheet} from '../components'
import { ProductTopList } from '../assets/data/homeTopList'
import { PRODUCTS } from '../assets/data/products'

const Products = () => {

    const sheetref = useRef(null)
    const [isOpen, setisOpen] = useState(false)

    const handlePress = useCallback(()=>{
        setisOpen(true)
        sheetref.current?.snapToIndex(0)
    },[])

    
    

    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Text style={styles.title}>Products</Text>
                <View style={styles.cartView}>
                    <CartBtn />
                </View>
            </View>

            <ScrollView
                alwaysBounceVertical={false}
                alwaysBounceHorizontal={false}
                bounces={false}
            >
                <SearchBar />
                <View style={styles.topList}>
                    <FlatList
                        data={ProductTopList}
                        keyExtractor={(item)=> item.id}
                        renderItem={({item})=>(
                            <View style={{marginRight: 20 }}>
                                <LinkBtn item={item} />
                            </View>
                        )}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        scrollEnabled={false}
                    />
                </View>

                
                <TouchableOpacity onPress={()=> setisOpen(!isOpen)}>
                    <Filter />
                </TouchableOpacity>

                <ProductsScrollView products={PRODUCTS} />

            </ScrollView>

            {
                isOpen&& <FilterSheet ref={sheetref} open={setisOpen}/>
            }

        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: COLORS.white
    },
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
        paddingLeft: 20,
        color: COLORS.secondary
    },
    cartView:{
        flex: 4,
        justifyContent: 'flex-end',
    },

    body: {
        flex:1
    },

    // top list area

    topList:{
        height: 110,
        marginLeft: 40,
        alignItems: 'center'
    },

    // filter
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




export default Products
