import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';


const img1 = require('./assets/Nice-Weather.jpg');
export default function App() {
  return (
    <View style={styles.container}>
    <ImageBackground source={img1} style={styles.image}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
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
