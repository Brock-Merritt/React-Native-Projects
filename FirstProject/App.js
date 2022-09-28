import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';


const img = require('./assets/brule2.jpg')
export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={{flex:1, resizeMode:"cover", JustifyContent:"center"}}> 
      <div>Hello</div>
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
