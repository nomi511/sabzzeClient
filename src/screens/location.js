import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet,Image, TextInput, TouchableWithoutFeedback, Keyboard, TouchableWithoutFeedbackBase } from 'react-native'
import {COLORS} from '../assets/theme'
import { BackBtn, Button } from '../components'
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'
import marker from '../assets/images/locationMarker.png'
import * as myLocation from 'expo-location'
import Geocoder from 'react-native-geocoder'
import axios from 'axios'

const Location = () => {

    const [region, setregion] = useState({
        latitude: 33.6907,
        longitude: 73.0057,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05
    })

    const [selection, setselect] = useState({ start: 0, end: 0 })


    
    

    // address from coordinates
    const [address, setaddress] = useState('')
    
    const getAddress = async(lat, lng) =>{
        
        const apikey = 'AIzaSyCRbrRcl9QRG2bPuqV--x-2KZbk43VBYug'

        const mylink = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apikey}`
        const res = await axios.get(mylink)
        const newaddr = res.data.results[0].formatted_address
        setaddress(newaddr)
    }

    const txtonChange = (txt) =>{
        setaddress(txt)
    }

    
    const getloc = async() =>{
        let location = await myLocation.getCurrentPositionAsync({});
        setregion({ 
            latitude: location.coords.latitude, 
            longitude: location.coords.longitude, 
            latitudeDelta: 0.003, 
            longitudeDelta: 0.003
        });
        
    }


    const regionChange = newregion => {
        setregion(newregion)
        getAddress((newregion.latitude), (newregion.longitude))
    }


    useEffect(() => {
        getloc()

        
        
    }, [])


    return (
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
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


            <View style={styles.locationView}>
                <Image source={marker} style={styles.imgIcon} 
                />
                <TextInput 
                    style={styles.locTxt}
                    selection={selection}
                    onFocus={()=> setselect({start: (address.length), end: (address.length)})}
                    placeholder='location' 
                    onChangeText={txt=>txtonChange(txt)}
                    value={address} 
                />
            </View>

            <View style={styles.btn}>
                <Button title="Confirm" page="OrderDetail" bgcolor={COLORS.primary} />
            </View>


            

        </View>

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
    locationView: {
        position: 'absolute',
        width: '90%',
        height: 50,
        top: 70,
        justifyContent: 'center',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: COLORS.primary,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
    },
    imgIcon:{
        flex: 1,
        width: 25,
        height: 25,
        resizeMode: 'cover',
        marginTop: 10,
        marginLeft: 5
    },
    locTxt:{
        flex: 11,
        marginLeft: 10,
        fontSize: 15,
        paddingRight:10
    }
})


export default Location
