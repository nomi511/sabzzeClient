import React, {useState, useRef, useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { BackBtn , Button} from '../components'
import {COLORS} from '../assets/theme'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { changeRegion } from '../redux/userSlice';
import { useNavigation } from '@react-navigation/core';

const Places = () => {

    const dispatch = useDispatch()
    const navigation = useNavigation()

    const ref = useRef()

    const [region, setRegion] = useState(null)


    const confirmlocation = ()=>{
        dispatch(changeRegion(region))
        navigation.navigate('Location')
    }



    useEffect(() => {
        ref.current?.focus();
    }, [])

    return (
        <View style={styles.container}>


            <View style={styles.header}>
                <View style={{flex:2, marginTop: 5}}>
                    <BackBtn />
                </View>
                <Text style={styles.title}>Confirm Location</Text>
            </View>
 

            <GooglePlacesAutocomplete
                ref={ref}
				placeholder="Search"
				fetchDetails={true}
                focus={true}
				GooglePlacesSearchQuery={{
					rankby: "distance"
				}}
				onPress={(data, details = null) => {
					setRegion({
						latitude: details.geometry.location.lat,
						longitude: details.geometry.location.lng,
						latitudeDelta: 0.003,
						longitudeDelta: 0.003
					})

                    

				}}
				query={{
					key: "AIzaSyCRbrRcl9QRG2bPuqV--x-2KZbk43VBYug",
					language: "en",
					components: "country:pk",
					types: "establishment",
				}}
                nearbyPlacesAPI='GooglePlacesSearch'
                
				styles={styles.places}
			/>

            <View>
                <Text></Text>
            </View>

            <View style={styles.btnView} onPress={()=>confirmlocation()}>
                {region?<View style={styles.btn}>
                    <Text style={{color: COLORS.secondary}} onPress={()=>confirmlocation()} >CONFIRM </Text>
                </View>: <></>}
            </View>


        </View>
    )
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        width: '100%',
    },
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
    places:{
        container: { 
            flex: 0, 
            marginTop: 20,
            zIndex: 1 
        },
        textInputContainer: {
            flexDirection: 'row',
        },
        textInput: {
            marginLeft: '5%',
            marginRight:'5%',
            fontSize: 16,
            height: 50,
            paddingLeft:20,
            alignItems: 'center',
            borderRadius: 50,
            borderWidth: 2,
            borderColor: COLORS.primary,
            backgroundColor: COLORS.white,
        },
        listView: {
            marginLeft: '2%',
            marginRight: '3%',
            backgroundColor: "white" 
        },
        loader: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            height: 20,
          }
    },
    btnView:{
        position: 'absolute',
        width: '100%',
        alignItems: 'center',
        bottom: 50
    },
    btn:{
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        borderRadius: 50,
        backgroundColor: COLORS.primary,
        color: COLORS.secondary
    }
    
});





export default Places
