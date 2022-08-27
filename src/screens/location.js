import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet,Image, TouchableWithoutFeedback } from 'react-native'
import {COLORS} from '../assets/theme'
import { BackBtn, Button,  } from '../components'
import MapView, { PROVIDER_GOOGLE} from 'react-native-maps'
import marker from '../assets/images/locationMarker.png'
import * as myLocation from 'expo-location'
import { useNavigation } from '@react-navigation/core'
import { useSelector } from 'react-redux'

const Location = () => {

    const navigation = useNavigation()


    // redux

    const {user} = useSelector(state=>state.user)
    console.log("\n\n\t User: "+ JSON.stringify(user))

    // ----------------------


    const [region, setregion] = useState(user.region)

    
    

    // address from coordinates
    const [address, setaddress] = useState('')
    
    const getAddress = async(lat, lng) =>{

        let myaddr = await myLocation.reverseGeocodeAsync({latitude:lat,longitude:lng})

        const formattedAddr = `${myaddr[0]?.name}, ${myaddr[0]?.street}, ${myaddr[0]?.district}, ${myaddr[0]?.city}, ${myaddr[0]?.region}`

        setaddress(formattedAddr)


    }


    const regionChange = newregion => {
        setregion(newregion)
        getAddress((newregion.latitude), (newregion.longitude))
    }


    useEffect(() => {
        
        regionChange(user.region)

    }, [user])


    return (
        <TouchableWithoutFeedback>
            {user&&(
            <View style={{flex:1, alignItems: 'center'}}>

            

                <View style={styles.header}>
                    <View style={{flex:2, marginTop: 5}}>
                        <BackBtn />
                    </View>
                    <Text style={styles.title}>Confirm Location</Text>
                </View>

                <MapView 
                    style={{height: '100%', width: '100%'}}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={region}
                    region={region}
                    onRegionChangeComplete={regionChange}
                />

                <Image source={marker} style={[
                    {width: 40,height: 40, resizeMode: 'cover'},
                    styles.markerStyles
                    ]} 
                />


                <View style={styles.locationArea}>
                    
                    <TouchableWithoutFeedback onPress={()=> navigation.navigate('Places')}>
                        {address?<View style={styles.locationView} >
                            <View style={styles.imgView} >
                                <Image 
                                    source={marker} 
                                    style={styles.imgIcon} 
                                />
                            </View>
                            <View style={styles.txtView}>
                                <Text style={styles.locTxt} numberOfLines={1} > {address} </Text>
                            </View>
                        </View>:<></>}
                    </TouchableWithoutFeedback>

                </View>

                <View style={styles.btn}>
                    {address?<Button title="Confirm" page="OrderDetail" bgcolor={COLORS.primary} />: <></>}
                </View>


                

            </View>
            )}
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 50,
        backgroundColor: COLORS.primary,
        flexDirection: 'row',
    },
    title:{
        flex:5,
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 12,
        color: COLORS.secondary
    },
    markerStyles:{
        flex:1,
        position: 'absolute',
        top: '51.6%',
        left: '45.5%',
    },
    btn:{
        position: 'absolute',
        bottom: 50
    },
    locationArea:{
        position: 'absolute',
        width: '100%',
        height: 50,
        top: 70,
    },
    locationView: {
        width: '90%',
        marginLeft: '5%',
        height: 50,
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: COLORS.primary,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
    },
    searchView:{
        marginTop: -15
    },
    imgView:{
        flex: 1,
        width: 45,
        height: 45,
        resizeMode: 'cover',
        borderRadius: 50,
        marginLeft: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primaryLight,
        marginRight: 10
    },
    imgIcon:{
        width: 25,
        height: 25,
        resizeMode: 'cover',
    },
    txtView:{
        flex: 6,
        marginRight: 15,
        overflow: 'hidden',
    },
    locTxt:{
        fontSize: 15,
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
        color: 'grey',
        paddingTop: 13,
        fontSize: 17,
        backgroundColor: COLORS.white
        
    },

    searchIcon:{
        position: 'absolute',
        top:26,
        right:40,
    },
})


export default Location
