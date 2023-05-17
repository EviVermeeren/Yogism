import React from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet, Image, TextInput } from "react-native";

const MaakRoutine1 = ({ navigation }) => {
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
        <Text style={styles.h1}>Stap 1 van 3 </Text>
      </View>

      <TouchableWithoutFeedback
    onPress={() => {
      navigation.navigate("MaakRoutine");
          }}>
          <View style={styles.AnnulerenButton}>
          <Text style={styles.Annuleren}>Annuleren </Text>
          </View>
        </TouchableWithoutFeedback>

      <View style={styles.searchContainer}>
        <Image style={styles.searchIcon} source={require("../media/search.png")} />
        <TextInput style={styles.searchInput} placeholder="Zoeken ..." />
      </View>

      <View style={styles.cardList}>
        {[...Array(6)].map((_, index) => (
            <View key={index} style={styles.cardContainer}>
            <Image style={styles.cardImage} source={require("../media/ChildPose.png")} />
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Child's Pose</Text>
                <Text style={styles.cardSubtitle}>2 min</Text>
            </View>
            <TouchableWithoutFeedback>
                <View style={styles.cardAdd}>
                <Text style={styles.cardAddText}>+</Text>
                </View>
            </TouchableWithoutFeedback>
            </View>
        ))}
        </View>

      <TouchableWithoutFeedback style={styles.nextButton} onPress={() => navigation.navigate("MaakRoutine2")}>
        <View style={styles.nextButtonContainer}>
          <Text style={styles.nextButtonText}>Volgende</Text>
        </View>
      </TouchableWithoutFeedback>
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
    h1: {
      fontSize: 24,
      fontWeight: "bold",
      left: -30,    
  },

    AnnulerenButton: {
        top: -50,
        left: 285,
    },

    Annuleren: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#FF9C64",
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
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 16,
    color: '#C4C4C4',
  },
  cardAdd: {
    backgroundColor: 'black',
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
  nextButton: {
    backgroundColor: '#FF9C64',
    alignSelf: 'center',
  },
  nextButtonContainer: {
    width: "80%",
    height: 50,
    backgroundColor: '#FF9C64',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
    
export default MaakRoutine1;