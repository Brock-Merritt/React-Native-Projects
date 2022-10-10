import React from 'react'
import { View, ScrollView, Image, Text, StyleSheet } from 'react-native'

const WeatherScroll = () => {
  return (
    <ScrollView style={styles.ScrollView}>
        <CurrentTempEl></CurrentTempEl>

    </ScrollView>
  )
}

const CurrentTempEl= () => {

    const img = {uri: 'http://openweathermap.org/img/wn/10d@2x.png'}
    return (
        <View style={styles.CurrentTempContainer}>
            <Image source={img} style={styles.image}/>
            <View style={styles.ForecastContainer}>
                <Text style={styles.day}>Sunday</Text>
                <Text style={styles.temp}> Night - 78&#176;F</Text>
                <Text style={styles.temp}> Day - 85&#176;F</Text>


            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
    },
    ScrollView: {
        flex: 0.4,
        backgroundColor: '#18181bcc',
        padding:30
    },
    CurrentTempContainer: {
        flexDirection: 'row',
        backgroundColor: '#00000033',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'white',
        borderWidth:1,

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
    }

})
export default WeatherScroll