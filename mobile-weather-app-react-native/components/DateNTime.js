import React from 'react'
import { View, Text } from 'react-native'

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
    <View>
      <View>
         <View>
            <Text> time here</Text>
         </View>
         <View>
            <Text> place here</Text>
         </View>
         <View>
            <Weather title="humidity" value="79" unit="%"/>
            <Weather/>
         </View>
      </View>
      <View>
        <Text>location</Text>
        <Text>lat/longitude</Text>
      </View>
    </View>
  )
}

export default DateNTime
