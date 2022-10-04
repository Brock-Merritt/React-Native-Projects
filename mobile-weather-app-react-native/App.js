import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import DateNTime from './components/DateNTime';

const img1 = require('./assets/Nice-Weather.jpg');
export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={img1} style={styles.image}>
      <DateNTime />
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
