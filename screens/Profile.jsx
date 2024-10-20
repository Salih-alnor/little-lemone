import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Switch,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import Logo from "../assets/images/Logo.png";
import profile from "../assets/images/Profile.png";
import back from "../assets/images/back.png";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [orderStatus, setOrderStatus] = useState(false);
  const [passwordChange, setPasswordChange] = useState(false);
  const [specialOffers, setSpecialOffers] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const data = await AsyncStorage.getItem("info");
        const info = JSON.parse(data);

        setFirstName(info.firstName);
        setLastName(info.lastName);
        setEmail(info.email);
        setPhoneNumber(info.phoneNumber);
        setOrderStatus(info.emailNotifications.orderStatus);
        setPasswordChange(info.emailNotifications.passwordChange);
        setSpecialOffers(info.emailNotifications.specialOffers);
        setNewsletter(info.emailNotifications.newsletter);
      } catch (error) {}
    };
    getInfo();
  }, [navigation]);

  const logOut = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate("onboarding");
    } catch (error) {}
  };

  const saveInfo = async() => {
    try {
      const newInfo = {
        firstName,
        lastName,
        email,
        phoneNumber,
        emailNotifications: {
          orderStatus,
          passwordChange,
          specialOffers,
          newsletter
        }
      }

      await AsyncStorage.setItem("info", JSON.stringify(newInfo))
      navigation.navigate("home")
    } catch (error) {
      
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.back}
        >
          <Image
            resizeMode="cover"
            style={{ width: 30, height: 30, tintColor: "#FFF" }}
            source={back}
          />
        </TouchableOpacity>
        <View style={styles.logo}>
          <Image
            resizeMode="cover"
            style={{ width: 120, height: 30 }}
            source={Logo}
          />
        </View>

        <TouchableOpacity style={styles.profile}>
          <Image
            style={{ width: "100%", height: "100%", borderRadius: 50 }}
            resizeMode="cover"
            source={profile}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.personalInfo}
      >
        <Text style={styles.mainTitle}>Personal information</Text>
        <Text style={styles.title}>Avatar</Text>

        <View style={styles.avatar}>
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
            }}
          >
            <Image
              style={{ width: "100%", height: "100%", borderRadius: 50 }}
              resizeMode="cover"
              source={profile}
            />
          </View>
          <TouchableOpacity
            style={[
              styles.btn,
              {
                backgroundColor: "#495E57",
                borderColor: "#495E57",
                borderWidth: 1,
                marginHorizontal: 16,
                borderRadius: 8,
              },
            ]}
          >
            <Text style={{ color: "#EEE", fontSize: 16, fontWeight: 600 }}>
              Change
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btn, { borderColor: "#495E57", borderWidth: 1 }]}
          >
            <Text style={{ color: "#495E57", fontSize: 16, fontWeight: 600 }}>
              Remove
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.information}>
          <View style={styles.inputContainer}>
            <Text style={styles.title}>First name</Text>
            <TextInput
              keyboardType="text"
              onChangeText={(value) => setFirstName(value)}
              value={firstName}
              style={[
                styles.input,
                { height: Platform.OS == "ios" ? 50 : "auto" },
              ]}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.title}>Last name</Text>
            <TextInput
              keyboardType="text"
              onChangeText={(value) => setLastName(value)}
              value={lastName}
              style={[
                styles.input,
                { height: Platform.OS == "ios" ? 50 : "auto" },
              ]}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.title}>Email</Text>
            <TextInput
              keyboardType="email-address"
              value={email}
              onChangeText={(value) => setEmail(value)}
              style={[
                styles.input,
                { height: Platform.OS == "ios" ? 50 : "auto" },
              ]}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.title}>Phone number</Text>
            <TextInput
              keyboardType="number-pad"
              onChangeText={(value) => setPhoneNumber(value)}
              value={phoneNumber}
              style={[
                styles.input,
                { height: Platform.OS == "ios" ? 50 : "auto" },
              ]}
            />
          </View>
        </View>

        <Text style={[styles.mainTitle, { marginTop: 0, fontSize: 18 }]}>
          Email notifications
        </Text>

        <View>
          <View
            style={[
              styles.switch,
              { marginVertical: Platform.OS === "ios" ? 10 : 0 },
            ]}
          >
            <Text style={styles.switchTitle}>Order statuses</Text>
            <Switch
              value={orderStatus}
              onChange={() => setOrderStatus(!orderStatus)}
            />
          </View>

          <View
            style={[
              styles.switch,
              { marginVertical: Platform.OS === "ios" ? 10 : 0 },
            ]}
          >
            <Text style={styles.switchTitle}>Password changes</Text>
            <Switch
              value={passwordChange}
              onChange={() => setPasswordChange(!passwordChange)}
            />
          </View>

          <View
            style={[
              styles.switch,
              { marginVertical: Platform.OS === "ios" ? 10 : 0 },
            ]}
          >
            <Text style={styles.switchTitle}>Special offers</Text>
            <Switch
              value={specialOffers}
              onChange={() => setSpecialOffers(!specialOffers)}
            />
          </View>

          <View
            style={[
              styles.switch,
              { marginVertical: Platform.OS === "ios" ? 10 : 0 },
            ]}
          >
            <Text style={styles.switchTitle}>Newsletter</Text>
            <Switch
              value={newsletter}
              onChange={() => setNewsletter(!newsletter)}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.logoutBtn} onPress={() => logOut()}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
            }}
          >
            Log out
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <TouchableOpacity
            style={[
              styles.btn,
              { borderColor: "#495E57", borderWidth: 1, borderRadius: 8 },
            ]}
          >
            <Text style={{ color: "#495E57", fontSize: 16, fontWeight: 600 }}>
              Discard changes
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={() => saveInfo()}
            style={[
              styles.btn,
              {
                backgroundColor: "#495E57",
                borderColor: "#495E57",
                borderWidth: 1,
                marginHorizontal: 16,
                borderRadius: 8,
              },
            ]}
          >
            <Text style={{ color: "#EEE", fontSize: 16, fontWeight: 600 }}>
              Save changes
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D9D9D9",
    paddingBottom: 120,
    minHeight: "100%",
  },

  header: {
    flexDirection: "row",
    height: 120,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 10,
    paddingTop: 50,
  },

  back: {
    width: 40,
    height: 40,
    backgroundColor: "#495E57",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
  },

  profile: {
    width: 50,
    height: 50,
  },

  personalInfo: {
    height: "100%",
    backgroundColor: "#EEE",
    paddingHorizontal: 16,
  },

  mainTitle: {
    fontSize: 25,
    marginVertical: 30,
    color: "#495E57",
    fontWeight: "500",
  },

  title: {
    fontSize: 14,
    color: "#495E57",
    marginBottom: 10,
  },

  avatar: {
    flexDirection: "row",
    alignItems: "center",
  },

  btn: {
    height: 50,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  information: {
    marginTop: 30,
  },

  inputContainer: {
    marginBottom: 20,
  },

  input: {
    borderColor: "#495E57",
    borderWidth: 0.9,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
  },

  switch: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  switchTitle: {
    fontSize: 17,
  },

  logoutBtn: {
    marginVertical: 50,
    width: "100%",
    height: 50,
    backgroundColor: "#F4CE14",
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
