import React from 'react'
import { View, StyleSheet } from 'react-native'
import ProductCard  from './productCard'

const ProductsScrollView = ({products}) => {
    return (
        <View style={styles.productsView}>
            {
                products.map((item)=>{
                    return (
                        <ProductCard Product={item} key={item.id}/>
                    )
                })
            }
        </View>

    )
}


const styles=StyleSheet.create({
    productsView:{
        flex: 1,
        width: '100%',
        padding: 10,
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
})

export default ProductsScrollView
