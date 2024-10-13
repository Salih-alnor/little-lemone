import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Home = ({navigation}) => {
  const logOut = async () => {
    try {
      await AsyncStorage.removeItem("info");
      await navigation.navigate("onboarding")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View style={styles.container}>
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})