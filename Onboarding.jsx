import { StyleSheet, Text, View, Dimensions, Image, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Logo from "./assets/images/Logo.png"
import AsyncStorage from '@react-native-async-storage/async-storage';
const { width, height } = Dimensions.get('window');
import { Formik } from "formik";
import * as Yup from 'yup';

const Onboarding = ({navigation}) => {
  
  const ValidateSchema = Yup.object().shape({
    firstName: Yup.string().required('first name is required'),
    lastName: Yup.string().required('last name is required'),
    email: Yup.string().email('invalid email').required("email is required").matches(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Dont use specal chrecter'),
    number: Yup.number(),
    
  })
  


  const sendDataToLocalStorage = async (data) => {
       try {
        const userInfo = JSON.stringify(data)
        await AsyncStorage.setItem("info", userInfo);
        console.log(userInfo)
        await navigation.navigate("home")
        
       } catch (error) {
        console.log(error);
       }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <View style={styles.logo}>
          <Image source={Logo}/>
        </View>
      </View>
      <Formik
       initialValues={{
        firstName: '',
        lastName: '',
        email: '',
       }}
       validationSchema={ValidateSchema}
        onSubmit={(values) => sendDataToLocalStorage(values)}>

           {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <>
                  <View style={styles.formSection}>
                  <Text style={{fontSize: 25, textAlign: "center", paddingBottom: 40}}>Let us get to know you</Text>
          
                  <View style={styles.inputContainer}>
                  <TextInput 
                   style={styles.input} 
                   keyboardType="text" 
                   placeholder="First Name" 
                   placeholderTextColor="grey"
                   onChangeText={handleChange("firstName")}
                   onBlur={handleBlur("firstName")}
                   value={values.firstName}
                   />
                   <View style={styles.message}>{errors.firstName && <Text style={{color: "orange"}}>{errors.firstName}</Text>}</View>
                  </View>

                  <View style={styles.inputContainer}>
                  <TextInput 
                   style={styles.input} 
                   keyboardType="text" 
                   placeholder="Last Name" 
                   placeholderTextColor="grey"
                   onChangeText={handleChange("lastName")}
                   onBlur={handleBlur("lastName")}
                   value={values.lastName}
                   />
                   <View style={styles.message}>{errors.lastName && <Text style={{color: "orange"}}>{errors.lastName}</Text>}</View>
                  </View>


                  <View style={styles.inputContainer}>
                  <TextInput
                   style={styles.input} 
                   keyboardType="email-address" 
                   placeholder="Email" 
                   placeholderTextColor="grey"
                   onChangeText={handleChange("email")}
                   onBlur={handleBlur("email")}
                   value={values.email}
                   />
                   <View style={styles.message}>{errors.email && <Text style={{color: "orange"}}>{errors.email}</Text>}</View>
                  </View>
          
                  
                </View>
          
                <View style={styles.submitBtn}>
                  <TouchableOpacity 
                  onPress={handleSubmit}
                  style={styles.btn}
                  
                  >
                    <Text style={{fontSize: 25, color: "grey"}}>Next</Text>
                  </TouchableOpacity>
                </View>
                </>
           )}
      </Formik>
    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({


  headerSection: {
    height: 150,
    backgroundColor: "#DEE3E9",
    paddingTop: 40,
  },

  logo: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20
  },

  formSection: {
    backgroundColor: "#CBD2D9", 
    paddingVertical: 100,
    paddingHorizontal: 16
    
  },

  input: {
    borderWidth: 1,
    borderColor: "#999",
    width: width - 32,
    height: 60,
    paddingLeft: 10,
    fontSize: 18,
    borderRadius: 8,
    marginTop: 10,
    
  },

  submitBtn: {
    backgroundColor: "#F1F4F7",
    height: "100%",
    alignItems: "flex-end"
  },

  btn: {
    width: 150,
    height: 50,
    backgroundColor: "#CBD2D9",
    justifyContent: "center",
    alignItems: "center", 
    marginTop: 50,
    borderRadius: 16,
    marginRight: 16
  },


  message: {
    height: 20,
  }
})