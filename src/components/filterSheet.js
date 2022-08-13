import React, {useRef, useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet'
import {COLORS} from '../assets/theme'
import Ionicons from '@expo/vector-icons/Ionicons'
import MultiSlider from '@ptomasroos/react-native-multi-slider'

const FilterSheet = React.forwardRef(({sheetRef,open}, ref) => {
    // bottom sheet
    const snapPoints = ["70%"]


    // slider
    const [slidervalues, setslidervalues] = useState([0,5000])
    const valueChange =(values)=>{
        setslidervalues(values)
    }

    // bottom sheet buttons
    const [btnOne, setbtnOne] = useState(false)
    const [btnTwo, setbtnTwo] = useState(false)


    return (
        <BottomSheet
            ref={ref}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            onClose={()=>open(false)}
            handleStyle={{
                backgroundColor: COLORS.primary, 
                borderTopRightRadius: 30,
                borderTopLeftRadius: 30
            }}
        >
            <View style={styles.container}>
                
                <View style={styles.containerView}>

                    <View style={styles.topbar}>
                        <TouchableOpacity onPress={()=>open(false)}>
                            <Ionicons name="md-close" size={25} style={{color: COLORS.secondary}} />
                        </TouchableOpacity>
                        
                        <Text style={[styles.headtxt,{marginLeft: '7%', fontWeight: 'bold'}]}>Filter</Text>
                        
                        <TouchableOpacity onPress={()=>{
                            setslidervalues([0,5000])
                            setbtnOne(false)
                            setbtnTwo(false)
                        }}>
                            <Text style={styles.headtxt}>Reset</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={{
                        color: COLORS.secondary, 
                        fontSize: 17,
                        fontWeight: 'bold',
                        marginTop: 30
                    }}>Price Range</Text>

                    
                    <View style={{flex: 1, alignItems:'center'}}>
                        <MultiSlider 
                            values={[slidervalues[0], slidervalues[1]]} 
                            isMarkersSeparated={true} 
                            customMarkerLeft={(e) => ( <CustomSliderMarker currentValue={e.currentValue} />)} 
                            customMarkerRight={(e) => ( <CustomSliderMarker currentValue={e.currentValue} />)} 
                            minMarkerOverlapDistance={3} 
                            sliderLength={330}
                            onValuesChange={valueChange}
                            min={0}
                            max={5000}

                            trackStyle={{
                                backgroundColor: COLORS.secondary,
                                height: 7,
                                borderRadius: 20
                            }}

                        />
                    </View>

                    <View style={styles.priceView}>
                        <Text style={styles.pricetxt}>Min: Rs. {slidervalues[0]}</Text>
                        <Text style={styles.pricetxt}>Max: Rs. {slidervalues[1]}</Text>
                    </View>


                    <Text style={{
                        color: COLORS.secondary, 
                        fontSize: 17,
                        fontWeight: 'bold',
                        marginTop: 30
                    }}>Categories</Text>

                    <View style={styles.btnView}>
                        <TouchableOpacity 
                            onPress={()=> (
                                setbtnOne(!btnOne)
                            )}
                            style={[styles.btn, 
                            {backgroundColor: (btnOne? 'orange': COLORS.primary)}
                        ]}
                        >
                            <Text style={styles.btnTxt}>Fruits</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            onPress={()=> (
                                setbtnTwo(!btnTwo)
                            )}
                            style={[styles.btn,
                             {backgroundColor: (btnTwo? 'orange': COLORS.primary)}
                        ]}>
                            <Text style={styles.btnTxt}>Vegitables</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        marginTop: 50,
                        alignItems: 'center'
                    }}> 
                        <TouchableOpacity 
                            style={[styles.btn,
                             {  backgroundColor: COLORS.secondary,
                                borderWidth: 0,
                                
                            }
                        ]}>
                            <Text style={{color: COLORS.primaryLight}}>Apply Filter</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        </BottomSheet>
    )
})


const CustomSliderMarker = ({currentValue}) => {
    return (
        <View style={{
            width:20, 
            height: 20, 
            borderRadius:50, 
            backgroundColor: COLORS.primaryLight, 
            marginTop: 7}}>
        </View>
    )
}


const styles = StyleSheet.create({
        container:{
            flex: 1, 
            backgroundColor: COLORS.primary,
            
        },
        containerView:{
            width: '90%',
            marginLeft: '5%'
        },
        topbar:{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        headtxt:{
            fontSize: 20,
            color: COLORS.secondary
        },
        priceView:{
            marginTop: 50,
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        pricetxt:{
            fontWeight: 'bold',
            color: COLORS.secondary
        },
        btnView:{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20
        },
        btn:{
            height: 50,
            width: 130,
            borderWidth: 2,
            borderColor: COLORS.primaryLight,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center'
        },
        btnTxt: {
            color: COLORS.secondary
        }
})

export default FilterSheet
