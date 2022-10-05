import React from 'react'
import { View, Text , StyleSheet } from 'react-native'

const Weather = ({title, value, unit}) => {
    return(
        <View>
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
            <Text> place here</Text>
         </View>
         <View>
            <Weather title="humidity" value="79" unit="%"/>
            <Weather title="Pressure" value="1000" unit="hPA"/>
            <Weather title="Sunrise" value="7:00" unit="am"/>
            <Weather title="Sunset" value="6:00" unit="pm"/>
         </View>
      </View>
      <View>
        <Text>location</Text>
        <Text>lat/longitude</Text>
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
    }
})

export default DateNTime
