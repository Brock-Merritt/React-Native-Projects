import React, {useEffect, useState} from 'react'
import { View, Text , StyleSheet } from 'react-native'

const Weather = ({title, value, unit}) => {
    return(
        <View style={styles.weatherItem}>
            <Text style={styles.weatherItemTitle} >{title}</Text>
            <Text style={styles.weatherItemValue} > {value}{unit}</Text>
        </View>
    )
}


const DateNTime = () => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  useEffect (() => {
    setInterval(() => {
      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const hour = time.getHours();
      const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
      const minutes = time.getMinutes();
      const ampm =  hour >= 12 ? 'PM' : 'AM'

      timeEl.innerHTML = (hoursIn12HrFormat < 10? '0' + hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0' + minutes : minutes) + '' + `<span id=am-pm>${ampm}</span`

      dateEl.innerHTML = days[day] + ',' + date+ '' + months[month]


    }, 1000)
  }, [])
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
      padding: 15
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

    },
    weatherItem:{
      flexDirection: 'row',
      justifyContent: 'space-between',
    
    },
    weatherItemTitle: {  
      color: 'white',
      fontSize: 14,
      fontWeight: 100,
      
    },
    weatherItemValue: {
      color: 'white',
      fontSize: 14,
      fontWeight: 100,
    },


})

export default DateNTime
