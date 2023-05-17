import React from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet, Image } from "react-native";

const MaakRoutine = ({ navigation }) => {
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
        <Text style={styles.h1}>Routine maken</Text>
      </View>

      <View style={styles.yogaIcoon}>
        <Image style={styles.yogaIcoon} source={require("../media/yogaIcon.png")} />
        </View>    

        <View style={styles.Ontwerp}>
                <Text style={styles.OntwerpText}>Ontwerp een nieuwe routine</Text>
                <Text style={styles.OntwerpText2}>Gebruik onze tool of stel zelf een routine samen</Text>
         </View>
          
          <TouchableWithoutFeedback style={styles.zelfSamensrtellenButton}    onPress={() => {
            navigation.navigate("MaakRoutine1");
          }}>
            <View style={styles.zelfSamensrtellen}>
                <Text style={styles.zelfSamensrtellenText}>Zelf een routine samenstellen</Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback style={styles.LaatOns}  onPress={() => {
            navigation.navigate("MaakRoutineAi");
          }}>
            <View style={styles.LaatOnsMaken}>
                <Text style={styles.LaatOnsMakenText}> Laat ons een routine maken </Text>
            </View>
            </TouchableWithoutFeedback>

       </View>


);
};

const styles = StyleSheet.create({
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 40,
      paddingHorizontal: 20,
      top: -210,
    },
    backButton: {
      paddingRight: 10,
    },
    logo: {
      width: 50,
      height: 50,
      left: -80,
    },
    h1: {
      fontSize: 24,
      fontWeight: "bold",
      left: -30,    
  },

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  yogaIcoon: {
    marginBottom: 20,
  },
  Ontwerp: {
    alignItems: "center",
    marginBottom: 50,
  },
  OntwerpText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  OntwerpText2: {
    fontSize: 16,
    color: "gray",
  },
  zelfSamensrtellen: {
    backgroundColor: "white",
    borderColor: "#FF9C64",
    borderWidth: 2,
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
    width: "80%",
    top: 160,
  },
  zelfSamensrtellenText: {
    color: "#FF9C64",
    fontWeight: "bold",
    textAlign: "center",
  },
  LaatOnsMaken: {
    backgroundColor: "#FF9C64",
    borderColor: "#FF9C64",
    borderWidth: 2,
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: "80%",
    top: 160,
  },
  LaatOnsMakenText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },


});
    
export default MaakRoutine;