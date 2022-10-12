import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import DateNTime from './components/DateNTime';
import WeatherScroll from './components/WeatherScroll';
import React, {useEffect, useState } from 'react';
const API_KEY = '75f3fdf49964ec379cdd41990752cdf7';
const img1 = require('./assets/Nice-Weather.jpg');
export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((success) => {

      let{latitude, longitude} = success.coords;
      fetchData(latitude, longitude)



    }, (err) => {
      if(err) {
        fetchData("24.5554","-81.7842")
      }
    })


  }, [])

  const fetchData = (latitude,longitude) => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutes&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data =>{
      console.log(data);
      setData(data);
    })
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={img1} style={styles.image}>
      <DateNTime current={data.current} timezone={data.timezone} lat={data.lat} lon={data.lon} />
      <WeatherScroll />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  image: { flex:1,
  resize:"cover",
  justifyContent:"center"
}
});
