import React from 'react'
import { View, Text, StyleSheet,SafeAreaView,ImageBackground,Image, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import {Button} from '../components'
import { Link, useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Constants from 'expo-constants'

const Login = () =>{



    return (
        <SafeAreaView style={[styles.container, {paddingTop: Constants.statusBarHeight}]}>
            <ImageBackground
            source={require('../assets/images/splashBackground.png')}
            style={styles.bgImage}
            >

                <View style={styles.imgView}>
                    <Image 
                    source={require('../assets/images/splashlogo.png')}
                    style={styles.image}
                    />
                </View>

                <View style={styles.loginView}>
                    <Text style={styles.logo}>LOGIN</Text>

                    <View style={styles.inputView}>
                        <Text style={styles.label}>Enter Your Mobile Number</Text>
                        <TextInput 
                        style={styles.input}
                        placeholder="03123456789"
                        keyboardType="numeric"
                        />
                    </View>


                    <Button title="LOGIN" page="ConfirmOTP" bgcolor="orange" />
                    

                    <Text style={{margin: 20, color: 'white'}}>OR</Text>

                    <TouchableOpacity>
                        <Link to={{screen:'Register'}} style={{
                            margin: 20, 
                            color: 'blue', 
                            fontSize: 17, 
                            textDecorationLine:'underline'
                        }}>REGISTER</Link>
                    </TouchableOpacity>


                </View>



            </ImageBackground>
            
        </SafeAreaView>
    )
}


const Register = () =>{

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
            source={require('../assets/images/splashBackground.png')}
            style={styles.bgImage}
            >

                <View style={[styles.imgView, {marginTop: 30}]}>
                    <Image 
                    source={require('../assets/images/splashlogo.png')}
                    style={styles.image}
                    />
                </View>

                <View style={styles.loginView}>
                    <Text style={[styles.logo,{marginTop:20}]}>REGISTER</Text>

                    <View style={styles.inputView}>
                        <Text style={styles.label}>Enter Your Namer</Text>
                        <TextInput 
                        style={styles.input}
                        placeholder="John Doe"
                        />
                    </View>

                    <View style={styles.inputView}>
                        <Text style={styles.label}>Enter Your Mobile Number</Text>
                        <TextInput 
                        style={styles.input}
                        placeholder="03123456789"
                        keyboardType="numeric"
                        />
                    </View>

                    <Button title="REGISTER" page="ConfirmOTP" bgcolor="orange" />

                    <Text style={{margin: 20, color: 'white'}}>OR</Text>

                    <TouchableOpacity>
                    <Link to={{screen:'Login'}} style={{
                            margin: 20, 
                            color: 'blue', 
                            fontSize: 17, 
                            textDecorationLine:'underline'
                        }}>LOGIN</Link>
                    </TouchableOpacity>


                </View>



            </ImageBackground>
            
        </SafeAreaView>
    )

}


const ConfirmOTP = ()=>{

    const navigate = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
            source={require('../assets/images/splashBackground.png')}
            style={styles.bgImage}
            >

                <TouchableOpacity style={styles.backBtn} onPress={()=>navigate.goBack()}>
                    <Ionicons name="md-arrow-back" size={32} color="#EAF4EE"/>
                </TouchableOpacity>

                <View style={[styles.imgView, {marginTop: 30}]}>
                    <Image 
                    source={require('../assets/images/splashlogo.png')}
                    style={styles.image}
                    />
                </View>

                <View style={styles.loginView}>
                    <Text style={styles.logo}>Confirm Your OTP</Text>

                    <View style={styles.inputView}>
                        <Text style={styles.label}>Enter 5-Digit Code</Text>
                        <TextInput 
                        style={styles.input}
                        placeholder="12345"
                        keyboardType="numeric"
                        />
                    </View>

                    <View style={styles.btnView}>
                        <Button title="CONFIRM" page="Home" bgcolor="orange" />
                    </View>
                    

                    


                </View>



            </ImageBackground>
            
        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#3FC979'
    },
    bgImage:{
        flex:1,
        resizeMode:'cover'
    },
    image:{
        width:220,
        height:160,
        resizeMode:'cover',
    },
    imgView:{
        flex:1,
        marginTop:60,
        alignItems:'center'
    },
    loginView:{
        flex:3,
        alignItems: 'center'

    },
    logo:{
        marginTop:30,
        color: '#EAF4EE',
        fontSize: 25
    },
    label:{
        paddingTop: 30,
        paddingLeft:20,
        paddingBottom:10,
        color:'#EAF4EE'
        
    },
    inputView:{
        width:'85%'
    },
    input:{
        width: '100%',
        alignItems:'center',
        padding:12,
        paddingLeft:30,
        borderRadius: 30,
        fontSize: 20,
        backgroundColor: '#EAF4EE',
        color: 'green'
        
    },
    btnView:{
        marginTop: 20
    },
    backBtn:{
        backgroundColor: "#52DB8C",
        width: 50,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        borderRadius: 50
    }

})




export {
    Login,
    Register,
    ConfirmOTP
}