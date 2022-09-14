import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Input from './components/input';
import Button from './components/button';
// import { navigation } from '@react-navigation/native';

export default function App() {
  // const linkTo = useLinkTo()
  return (
    <View style={styles.container}>
      <View style={{}}>
        <Image style={{ marginLeft: 50 }} source={require('./assets/favicon.png')} />
        <Text style={{
          fontSize: 25
        }}>Wellcome to your</Text>
      </View>
      <View>
        <Text>Wellcome to your app. Build your own social network in minutes.</Text>
      </View>
      <Button name="Log In" backgroundColor="blue"
        borderColor="blue"
        color="white"
        // onPress={() =>
        //   navigation.navigate('Profile', { name: 'Jane' })}
           />
      <Button name="Sign Up" backgroundColor="white"
        borderColor="blue"
        color="blue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
