import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  TextInput,
} from "react-native";


const GegevensWijzigen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
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
        <Text style={styles.h1}>Gegevens Wijzigen </Text>
      </View>

      <TouchableWithoutFeedback
          onPress={() => {
            navigation.goBack();
          }}>
          <View style={styles.saveButton}>
          <Text style={styles.save}>Save </Text>
          </View>
        </TouchableWithoutFeedback>


        <View style={styles.meldingen}>
        <View style={styles.formGroup}>
            <Text style={styles.label}>Voornaam</Text>
            <TextInput
              style={styles.input}
              placeholder=" Evi "
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Achternaam</Text>
            <TextInput
              style={styles.input}
              placeholder="Vermeêren"
            />
          </View>
  
          <View style={styles.formGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="evi.vermeeren@gmail.com"
            />
          </View>
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
    right: 35,
  },

  meldingen: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "5%",
    height: 400,
    marginTop: -270,
    gap: 10,
  },

  saveButton: {
    position: "absolute",
    top: 45,
    right: 20,
    paddingTop: 10,
  },
  save: {
    top: 5,
    right: 10,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FF9C64",
  },

////////////////////////////////////////////////////////////////////////////////////////////////////////////

container: {
  paddingHorizontal: 10,
  paddingVertical: 30,
},
formGroup: {
  marginBottom: 20,
  top: 375,
},
label: {
  fontSize: 18,
  fontWeight: "bold",
  marginBottom: 5,
},
input: {
  borderWidth: 1,
  borderColor: "#ddd",
  borderRadius: 25,
  paddingHorizontal: 10,
  paddingVertical: 8,
  paddingLeft: 30,
  marginTop: 10,
  fontSize: 16,
  color: "#444",
  height: 75,
},





});

export default GegevensWijzigen;