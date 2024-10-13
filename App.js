// import "react-native-gesture-handler";
import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProgressBarExample from './ProgressBarExample';
import Onboarding from './Onboarding';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home"
import Profile from "./screens/Profile"
import AsyncStorage from '@react-native-async-storage/async-storage';
import Splash from './screens/Splash';
export default function App() {

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="splash" component={Splash}/>
        <Stack.Screen options={{headerShown: false}} name="home" component={Home}/>
        <Stack.Screen options={{headerShown: false}} name="profile" component={Profile}/>
        <Stack.Screen options={{headerShown: false}} name="onboarding" component={Onboarding}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
});
