import { View, Text, Image, ActivityIndicator } from 'react-native'
import React, {useEffect, useState} from 'react'
// import  Feather  from 'react-native-vector-icons/Feather';
import Logo from "../assets/images/Logo.png"
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
  
         const  getData = async() => {
            try {
            setIsLoading(true) 
            const info = await AsyncStorage.getItem("info");
            const values = JSON.parse(info)
            setIsLoading(false) 
            if(!isLoading) {
                
                if (values) {
                    return navigation.navigate('home')
                   } else {
                    return navigation.navigate('onboarding')
                   }
            } else {
                return
            }
            } catch (error) {
             console.log(error)
            }
         }
   
         getData();
         
       },[])
  return (
    <View style={{backgroundColor: '#D9D9D9', flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: "column"}}>
     
    </View>
  )
}

export default Splash