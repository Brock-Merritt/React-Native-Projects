import React from 'react'
import { View, Text , StyleSheet } from 'react-native'

const Weather = ({title, value, unit}) => {
    return(
        <View style={styles.weatherItem}>
            <Text>{title}</Text>
            <Text> {value}{unit}</Text>
        </View>
    )
}

const DateNTime = () => {
  return (
    <View style={styles.container}>
      <View>
         <View>
            <Text style={styles.heading}> time here</Text>
         </View>
         <View>
            <Text style={styles.subheading}> date here</Text>
         </View>
         <View style={styles.WeatherItemContainer}>
            <Weather title="humidity" value="79" unit="%"/>
            <Weather title="Pressure" value="1000" unit="hPA"/>
            <Weather title="Sunrise" value="7:00" unit="am"/>
            <Weather title="Sunset" value="6:00" unit="pm"/>
         </View>
      </View>
      <View style={styles.rightAlign}>
        <Text style={styles.timezone} >location</Text>
        <Text style={styles.latlong} >lat/longitude</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex:1.5,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    heading: {
      fontSize: 45,
      color: 'white',
      fontWeight: '100'

    },
    subheading: { 
        fontSize: 25,
        color: '#eee',
        fontWeight: '300'
    },
    rightAlign: {
      textAlign: 'right',
      marginTop: '20px',
    },
    timezone: {
      fontSize: 20,
      color: 'white'
    },
    latlong:{
      fontSize:16,
      color: 'white',
      fontWeight: '700,'
    },
    WeatherItemContainer:{
      backgroundColor: '#18181b99',
      borderRadius: 10,
      padding: 10,
      marginTop : 10

    }
})

export default DateNTime
