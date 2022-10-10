import React from 'react'
import { View, Text, Image, StyleSheet  } from 'react-native'

const FutureForecast = () => {
  return (
    <View style={{flexDirection:'row'}}>
        <FutureForecastItem></FutureForecastItem>
        <FutureForecastItem></FutureForecastItem>
        <FutureForecastItem></FutureForecastItem>

    </View>
  )
}

const FutureForecastItem = () => {  
    const img = {uri: 'http://openweathermap.org/img/wn/10d@2x.png'}
    return (
        <View style={styles.FutureForecastItemContainer}>
            <Text style={styles.day}>Mon</Text>
            <Image source={img} style={styles.image} />
            <Text style={styles.temp}>Night = cold</Text>
            <Text style={styles.temp}>day = warm</Text>

        </View>


    )

}

const styles = StyleSheet.create({
    image:{
        width:100,
        height:100
    },
    FutureForecastItemContainer: {  
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#00000033',
        borderRadius: 10,
        borderColor:'white',
        borderWidth: 1,
        padding:15,
        marginLeft: 8,
    },   
    day:{
        fontSize: 20,
        color:'white',
        backgroundColor: '#3c3c44',
        padding:10,
        textAlign: 'center',
        borderRadius:50,
        fontWeight: 200,
        marginBottom:15
    },
    temp:{
        fontSize:16,
        color:'white',
        fontWeight:100,
        textAlign: 'center',
    },

})


export default FutureForecast