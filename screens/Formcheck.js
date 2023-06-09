import React from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet, Image, TextInput } from "react-native";

const Formcheck = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
        <Text style={styles.h1}>Formcheck </Text>
        <Text style={styles.kies}>Kies een pose </Text>
        <TouchableWithoutFeedback>
        <Image style={styles.Icoon} source={require("../media/videohorizontal.png")} />
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.searchContainer}>
        <Image style={styles.searchIcon} source={require("../media/search.png")} />
        <TextInput style={styles.searchInput} placeholder="Zoeken ..." />
      </View>

      <View style={styles.cardList}>
        {[...Array(7)].map((_, index) => (
            <View key={index} style={styles.cardContainer}>
            <Image style={styles.cardImage} source={require("../media/ChildPose.png")} />
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Child's Pose</Text>
                <Text style={styles.cardSubtitle}>2 min</Text>
            </View>
            <TouchableWithoutFeedback>
                <View style={styles.cardAdd}>
                <Image style={styles.arrow} source={require("../media/arrowright2.png")} />
                </View>
            </TouchableWithoutFeedback>
            </View>
        ))}
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      },
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 40,
      paddingHorizontal: 20,
      top: -15,
    },
    backButton: {
      paddingRight: 10,
    },
    logo: {
      width: 50,
      height: 50,
      left: -90,
    },

    Icoon: {
      left: 45,
      top: 3,
    },

    h1: {
      fontSize: 24,
      fontWeight: "bold",
      left: 60,    
  },

    kies: {
        fontSize: 16,
        color: "grey",
        top: 50,
        left: -63,
    },
    


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////


 container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  searchContainer: {
    backgroundColor: '#F2F2F2',
    borderRadius: 25,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
    top:40,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 20,
    marginLeft: 10
  },
  searchInput: {
    flex: 1,
    color: '#000000',
    fontSize: 16,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 10,
    top: 30,
  },
  cardImage: {
    width: 70,
    height: 70,
    marginRight: 20,
    borderRadius: 30,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 20,
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 16,
    color: '#C4C4C4',
  },
  cardAdd: {
    width: 30,
    height: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardAddText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    top: -3,
    left: 0.5,
  },

  arrow: {
    width: 20,
    height: 20,
  },
});
    
export default Formcheck;