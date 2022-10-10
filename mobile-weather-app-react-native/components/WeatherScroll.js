import React from 'react'
import { View, ScrollView, Image, Text, StyleSheet } from 'react-native'

const WeatherScroll = () => {
  return (
    <ScrollView>
        <CurrentTempEl></CurrentTempEl>

    </ScrollView>
  )
}

const CurrentTempEl= () => {

    const img = {uri: 'http://openweathermap.org/img/wn/10d@2x.png'}
    return (
        <View>
            <Image source={img} style={styles.image}/>
            <View>
                <Text>Sunday</Text>
                <Text> Night - 78&#176;F</Text>
                <Text> Day - 85&#176;F</Text>


            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
    }
})
export default WeatherScroll