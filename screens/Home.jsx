import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import React, {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from "../assets/images/Logo.png"
import Profile from "../assets/images/Profile.png"
import HeroImage from "../assets/images/Hero image.png"
import Search from "../assets/images/search.png"
const { width, height } = Dimensions.get('window');
const URL = "https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json";
import filter from 'lodash.filter';

const images = {
  'greekSalad.jpg': require('../assets/images/Greek salad.png'),
  'bruschetta.jpg': require('../assets/images/Bruschetta.png'),
  'grilledFish.jpg': require('../assets/images/Grilled fish.png'),
  'pasta.jpg': require('../assets/images/Pasta.png'),
  'lemonDessert.jpg': require('../assets/images/Lemon dessert.png'),
};

const Home = ({navigation}) => {
  const [isLoding, setIsLoding] = useState(false);
  const [fullData, setFullData] = useState([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("")
  const [message, setMessage] = useState(null)

  const menuCategory = ["Lunch", "Mains", "Desserts", "Starters", "Specials"];
  const getData = async(url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      const menu = json.menu;
      setData(menu);
      setFullData(menu)
      setIsLoding(false);
    } catch (error) {
      setError(error);
      setIsLoding(false);
    }
  }


  useEffect(() => {
    setIsLoding(true);
    getData(URL);
  }, [])


  const filterItems = (query) => {
    setSearchQuery(query);
    const formattedQuery = query.toLowerCase().replace(/\s+/g, '');
    const filterData = filter(fullData, (item) => {
     return contains(item, formattedQuery); 
    });
    setData(filterData)
 };

 const contains = ({name, category}, queformattedQuery) => {
  if(name.includes(queformattedQuery) || category.includes(queformattedQuery)) {
    setMessage(null)
    return true
  }
  setMessage("Not found dishes")
  return false
}


  if (isLoding) {
    return (
      <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#D9D9D9" }}>
        <ActivityIndicator size={"large"} color={"#495E57"} />
      </View>
    );
  }

  if (error || data === undefined) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 16 }}>
          Somthing wrong please check your internet !
        </Text>
      </View>
    );
  } 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{width: 50}}></View>
        <View style={styles.logo}>
          <Image resizeMode='cover' style={{width: 120, height: 30}} source={Logo}/>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('profile')} style={styles.profile}>
          <Image style={{width: "100%", height: "100%", borderRadius: 50}} resizeMode='cover' source={Profile}/>
        </TouchableOpacity>
      </View>

      <ScrollView
      showsVerticalScrollIndicator={false} 
      
      >
        <View style={styles.heroSection}>
           <View>
            <Text style={{fontSize: 35, color: "#F4CE14"}}>Little Lemone</Text>
            <Text style={{fontSize: 20, color: "#FFF"}}>Chicago</Text>
           </View>

           <View style={styles.about}>
             <Text style={{width: 210, fontSize: 15, color: "#FFF", lineHeight: 20}}>
              We are a family owned Mediterranean restaurant,
              focused on traditional recipes served
               with a modern twist.
             </Text>
             <Image style={{width: 120, height: 120, borderRadius: 16}} source={HeroImage}/>
           </View>

           <View style={styles.search}>
              <Image style={{width: 25, height: 25, tintColor: "#495E57"}} source={Search}/>
              <TextInput 
                clearButtonMode='always'  
                keyboardType='search' 
                autoCapitalize="none"
                placeholder='Search' 
                onChangeText={(query) => filterItems(query)}
                style={{fontSize: 18, width:"90%", textDecorationLine:"none", color:"grey"}}/>
            </View>
        </View>
        
        <View style={styles.menuBreakdown}>
          <Text style={{marginTop: 20, fontSize: 16, fontWeight: "bold", marginLeft: 16, letterSpacing: .9}}>ORDER FOR DELIVERY !</Text>
          <ScrollView 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{paddingHorizontal: 10, marginBottom: 20}}
          >

            {menuCategory.map((item, index) => {
              return(
                <TouchableOpacity onPress={() => filterItems(item)} style={[styles.sectionBtn, {marginRight:index === item.length - 1  ? 16 : 10}]} key={index}>
                   <Text style={{fontWeight: "600", color: "#495E57"}}>{item}</Text>
                </TouchableOpacity>
              )
            })}
              
          </ScrollView>
          
        </View>
        {!message ? 
       
        data.map((item, index) => {
          return (
            <View key={index} style={styles.item}>
              <Text style={styles.line}></Text>
              <TouchableOpacity style={styles.itemInfo}>
                <View>
                <Text style={styles.title}>{item.name}</Text>
                <Text numberOfLines={2} style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>$ {item.price}</Text>
                </View>
                <View >
                  <Image style={{width: 83, height: 83, }} source={images[item.image]}/>
                </View>
              </TouchableOpacity>
            </View>
          )
        }) : 
        <View style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 100
        }}>
          <Text style={{
            fontSize: 25,
            color: "#495E57"
          }}> {message} </Text>
        </View>}
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D9D9D9",
    paddingBottom: 120,
    minHeight: "100%"
  },

  header: {
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
    alignItems: "center",
   
  },

  search: {
    height: 50,
    width: width - 32,
    backgroundColor: "#EEE",
    marginTop: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },

  sectionBtn: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#FFF",
    marginHorizontal: 6,
    marginVertical: 20,
    borderRadius: 10
  },

  item: {
    paddingHorizontal: 16,
  },

  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#999"
  },

  itemInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 30
  },

  title: {
   fontSize: 16,
   fontWeight: "bold"
  },

  description: {
    width: 260,
    marginVertical: 16,
    color: "#495E57"
  },

  price: {
    fontWeight: "600",
    fontSize: 16,
    color: "#495E57"
  }
})