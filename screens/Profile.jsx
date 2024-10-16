import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import Logo from "../assets/images/Logo.png";
import profile from "../assets/images/Profile.png";
import back from "../assets/images/back.png";

const Profile = ({ navigation }) => {
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

      <ScrollView style={styles.personalInfo}>
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
            <TextInput keyboardType="text" style={styles.input}/>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.title}>Last name</Text>
            <TextInput keyboardType="text" style={styles.input}/>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.title}>Email</Text>
            <TextInput keyboardType="email-address" style={styles.input}/>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.title}>Phone number</Text>
            <TextInput keyboardType="number-pad" style={styles.input}/>
          </View>
        </View>

        <Text style={[styles.mainTitle, {marginTop: 0, fontSize: 18}]}>Email notifications</Text>


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
    fontSize: 13,
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
    marginBottom: 20
  },

  input: {
    borderColor: "#495E57",
    borderWidth: .9,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8
  }
});
