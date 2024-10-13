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
    <View style={{backgroundColor: '#DDD', flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: "column"}}>
     {/* <View>
        <Image source={Logo} style={{width: 300, height: 70}}/>
     </View> */}
      <ActivityIndicator size={40} color={"#495E57"} style={{marginTop: 30, fontWeaght: "bold" }}/>
    </View>
  )
}

export default Splash