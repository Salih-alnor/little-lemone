import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from "../assets/images/Logo.png"
import Profile from "../assets/images/Profile.png"
import HeroImage from "../assets/images/Hero image.png"
import Search from "../assets/images/search.png"
const { width, height } = Dimensions.get('window');
const Home = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{width: 50}}></View>
        <View style={styles.logo}>
          <Image resizeMode='cover' style={{width: 120, height: 30}} source={Logo}/>
        </View>

        <View style={styles.profile}>
          <Image style={{width: "100%", height: "100%", borderRadius: 50}} resizeMode='cover' source={Profile}/>
        </View>
      </View>

      <ScrollView>
        <View style={styles.heroSection}>
           <View>
            <Text style={{fontSize: 35, color: "#F4CE14"}}>Little Lemone</Text>
            <Text style={{fontSize: 20, color: "#FFF"}}>Chicago</Text>
           </View>

           <View style={styles.about}>
             <Text style={{width: 210, fontSize: 15, color: "#FFF"}}>
              We are a family owned Mediterranean restaurant,
              focused on traditional recipes served
               with a modern twist.
             </Text>
             <Image style={{width: 120, height: 120, borderRadius: 16}} source={HeroImage}/>
           </View>

           <View style={styles.search}>
              <Image style={{width: 25, height: 25, tintColor: "#495E57"}} source={Search}/>
              <TextInput clearButtonMode='always'  keyboardType='search' placeholder='Search' style={{fontSize: 18, width:"90%", textDecorationLine:"none", color:"grey"}}/>
            </View>
        </View>
        
        <View style={styles.menuBreakdown}>
          <Text style={{marginTop: 20, fontSize: 16, fontWeight: "bold", marginLeft: 16}}>ORDER FOR DELIVERY !</Text>
          <ScrollView 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{paddingHorizontal: 10}}
          >
              <TouchableOpacity style={styles.sectionBtn}>
                <Text style={{fontWeight: "600", color: "#495E57"}}>Lunch</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.sectionBtn}>
                <Text style={{fontWeight: "600", color: "#495E57"}}>Mains</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.sectionBtn}>
                <Text style={{fontWeight: "600", color: "#495E57"}}>Desserts</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.sectionBtn}>
                <Text style={{fontWeight: "600", color: "#495E57"}}>A La Carte</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.sectionBtn}>
                <Text style={{fontWeight: "600", color: "#495E57"}}>Specials</Text>
              </TouchableOpacity>
          </ScrollView>
          
        </View>
        
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D9D9D9"
  },

  header: {
    backgroundColor: "#D9D9D9",
    flexDirection: "row",
    height: 120,
    justifyContent:"space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 10,
    paddingTop: 50
  },

  profile: {
    width: 50, height: 50,

  },

  heroSection: {
    height: 300,
    backgroundColor: "#495E57",
    paddingHorizontal: 16,
    paddingTop: 10
  },

  about: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  search: {
    height: 50,
    width: width - 32,
    backgroundColor: "#EEE",
    marginTop: 20,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10
  },

  sectionBtn: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#FFF",
    marginHorizontal: 6,
    marginVertical: 20,
    borderRadius: 10
  }
})