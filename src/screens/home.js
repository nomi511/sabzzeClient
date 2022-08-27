import React, {useState, useEffect}from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView, Alert,Platform, Linking,  } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import {homeTopList} from '../assets/data/homeTopList'
import {COLORS} from '../assets/theme'
import MapView from 'react-native-maps'
import marker from '../assets/images/locationMarker.png'
import * as Location from 'expo-location'
import { SearchBar, CartBtn, ProductsScrollView, LinkBtn } from '../components/'
import { useNavigation } from '@react-navigation/core'
import {useSelector, useDispatch} from 'react-redux'
import { addUser } from '../redux/userSlice'


const Home = () => {


    //redux
    
    const dispatch = useDispatch()

    const products = useSelector(state => state.products)
    const {user} = useSelector(state=>state.user)


    


    //-------------------------------

    const navigation = useNavigation()

    const [toplistdata, settoplistdata] = useState(homeTopList)
    const [region, setregion] = useState({
        latitude: 33.6907,
        longitude: 73.0057,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003 
    })



    const navigateTo = (val) =>{
        navigation.navigate(val)
    }

    

    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {

        const openAppSettings = () => {
            if (Platform.OS === 'ios') {
              Linking.openURL("app-settings:");
            } else {
                Linking.openSettings()
            }

            ShowAlert()
        }


        const ShowAlert = () =>{
            if(!user || !user.region){
                Alert.alert('Location', 'Location Error! Either restart the App or try again', [
                    {text: 'OK', onPress: () => ShowAlert()},
                    {text: 'Try Again', onPress: () => getlocation()},
                ],)
            }
        }


        const getlocation =async() => {
            
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                Alert.alert('Location', 'Go to settings and give location permission to this app inorder to use the app smoothly.', [
                    {text: 'Close', onPress: () => getlocation()},
                    {text: 'Settings', onPress: () => {
                        openAppSettings()
                    }},
                ],)
                
                return;
            }

            

            let location = await Location.getCurrentPositionAsync({});
            setregion({
                latitude: location.coords.latitude, 
                longitude: location.coords.longitude, 
                latitudeDelta: 0.003, 
                longitudeDelta: 0.003
            })

            const userData = {
                token: 'abcd',
                location: {
                    latitude: location?.coords.latitude,
                    longitude: location?.coords.longitude,
                },
                region: {
                    latitude: location.coords.latitude, 
                    longitude: location.coords.longitude, 
                    latitudeDelta: 0.003, 
                    longitudeDelta: 0.003
                }
            }

            dispatch(addUser(userData))
        
        };

        getlocation()


    }, []);


    

    
    return (
        <View style={styles.container}>

            

            <View style={styles.header}>
                    <View style={styles.logo}>
                        
                        <Image source={require('../assets/images/logo.png')} style={{
                            flex:1,
                            width: 70,
                            height: 70,
                            marginTop:-10,
                            marginHorizontal: 4
                        }} />

                        <Text style={styles.logotxt}>sabzee</Text>

                        <View style={styles.cartView}>
                            <CartBtn />
                        </View>
                        

                    </View>
                </View>
                
            <ScrollView 
                alwaysBounceVertical={false}
                alwaysBounceHorizontal={false}
                bounces={false}
            >

                <SearchBar />


                <View style={styles.toplistArea}>
                    
                    <FlatList
                        data={toplistdata}
                        keyExtractor={(item)=> item.id}
                        renderItem={({item})=>{
                            return(
                                <LinkBtn item={item} />
                            )
                        }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        scrollEnabled={false}
                    />

                </View>

                <View style={styles.btns}>

                    <TouchableOpacity onPress={()=>navigateTo('Products')}>
                        <View style={[styles.btnView,{backgroundColor: COLORS.primary}]}>
                            <Text style={[
                                styles.btnText, 
                                {color:COLORS.secondary
                            }]}
                            >Shop Now</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={[styles.btnView,{backgroundColor: COLORS.primary}]}>
                            <Text style={[
                                styles.btnText, 
                                {color:COLORS.secondary
                            }]}
                            >Wholesale</Text>
                        </View>
                    </TouchableOpacity>
                    
                </View>

                <View style={styles.locationView}>
                    <View style={styles.locationLable}>
                        <Ionicons name="md-compass" size={25} style={styles.locationIcon} />
                        <Text style={styles.locationTxt}> - Current Location</Text>
                    </View>

                    <View style={styles.currLocation}>
                        <MapView 
                            style={styles.mapStyles}
                            initialRegion={region}
                            region={region}
                        />
                        <Image source={marker} style={[
                            {width: 30,height: 30, resizeMode: 'cover'},
                            styles.markerStyles
                            ]} 
                        />


                    </View>

                </View>

                <ProductsScrollView products={products.products} />

                



            </ScrollView>


        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    header:{
        height: 50,
        backgroundColor: COLORS.primary
    },
    logo:{
        flex: 1,
        flexDirection: 'row',
        
    },
    logoimg:{
        flex: 1
    },
    logotxt: {
        flex:2,
        marginTop: 5,
        marginLeft: -10,
        fontSize: 30,
        color: COLORS.secondary
    },
    cartView:{
        flex: 4,
        justifyContent: 'flex-end',
    },


    // top list style


    toplistArea:{
        height: 120,
        marginLeft: 18,
        alignItems: 'center'

    },

    // buttons

    btns:{
        width: '85%',
        marginBottom: 5,
        marginLeft: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
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
    },


    // current location styles

    locationView: {
        marginTop: 5
    },

    locationLable:{
        flexDirection: "row",
        marginLeft: 20,
        marginBottom: 5

    },
    locationIcon:{
        color: COLORS.secondary
    },
    locationTxt:{
        fontSize: 20,
        fontWeight: '500',
        color: COLORS.secondary
    },
    currLocation:{
        height: 170,
        position: 'relative',
    },
    mapStyles: {
        height: '100%',
        width: '100%',
    },
    markerStyles:{
        flex:1,
        position: 'absolute',
        top: '34%',
        left: '46%',
        
    },



    
})




export default Home
