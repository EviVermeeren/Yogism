import React from "react";
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from "react-native";

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MijnGegevens = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.goBack();
          }}
        >
          <View style={styles.backButton}>
            <Image
              style={styles.logo}
              source={require("../media/back.png")}
              resizeMode="contain"
            />
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.h1}>Mijn Gegevens</Text>
      </View>

      <TouchableWithoutFeedback
          onPress={() => {
            navigation.goBack();
          }}>
          <View style={styles.saveButton}>
          <Text style={styles.save}>Save </Text>
          </View>
        </TouchableWithoutFeedback>
      

      <View style={styles.profile}>
        <View style={styles.profileLeft}>
          <Image
            style={styles.profileImage}
            source={require("../media/avatar.jpg")}
          />
          <Image
            style={styles.cameraIcon}
            source={require("../media/cameraIcon.png")}
          />
        </View>
        <View style={styles.profileMiddle}>
        <Image
            style={styles.proIcon}
            source={require("../media/proIcon.png")}
          />
          <Text style={styles.name}>Evi Vermeêren </Text>
          <Text style={styles.email}>evi.vermeeren@gmail.com</Text>
          <Text style={styles.memberSince}>Lid geworden in 2023</Text>
        </View>
        <View style={styles.profileRight}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("GegevensWijzigen");
          }}
        >
          <Image
            style={styles.editIcon}
            source={require("../media/editIcon.png")}
          />
        </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={styles.bio}>
      <Text style={styles.bioTitel}>Bio</Text>
        <Text style={styles.bioText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
          mauris commodo, volutpat enim ut, consequat leo.
        </Text>
      </View>
      <View style={styles.profileLink}>
      <Text  style={styles.profielLinkTitel}>Jouw profiellink</Text>
        <Text style={styles.profileLinkText}>https://Lorem ipsum dolor sit </Text>
      </View>
        </View>     

        );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    },
    header: {
      position: "absolute",
      top: 10,
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      paddingTop: 30, // add padding top to prevent content from being hidden behind status bar
    },
  
    h1: {
      fontSize: 24,
      fontWeight: "bold",
      left: -15,
    },
  
    logo: {
      width: 50,
      height: 50,
      right: 60,
    },

    saveButton: {
      position: "absolute",
      top: 45,
      right: 20,
      paddingTop: 10,
    },
    save: {
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
      color: "#FF9C64",
    },



///////////////////////////////////////////////////////////////////////////////////////////////////////

container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    top: 100,
  },
  profileLeft: {
    position: "relative",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  cameraIcon: {
    position: "absolute",
    top: 40,
    right:  -5,
    width: 40,
    height: 40,
    backgroundColor: "#B0EDF1",
    borderRadius:20,
    paddingTop: 0,
  },
  profileMiddle: {
    flex: 1,
    marginLeft: 20,
  },
  proIcon: {
    position: "absolute",
    width: 40,
    height: 18,
    top: 5,
    left: 140,
  },

  name: {
    fontWeight: "bold",
    fontSize: 20,
  },
  email: {
    color: "#999",
    fontSize: 16,
  },
  memberSince: {
    color: "#999",
    fontSize: 16,
  },
  profileRight: {},
  editIcon: {
    width: 24,
    height: 24,
  },
  bio: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
    height: 110,
    justifyContent: "center",
    padding: 10,
    marginBottom: 30,
    top: 130
  },
  bioText: {
    color: "#999",
    fontSize: 17,
    top: -20,
    left: 10,
  },
  bioTitel: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    top: -40,
  },
  profielLinkTitel:{
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    top: 130,
  },
  profileLinkText: {
    fontSize: 16,
    top: 130,
  },


    });
export default MijnGegevens;