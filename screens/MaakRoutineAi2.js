import React from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet, Image,} from "react-native";

const MaakRoutineAi2 = ({ navigation }) => {
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
        <Text style={styles.h1}>Stap 2 van 3 </Text>
      </View>

      <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("MaakRoutine");
          }}>
          <View style={styles.AnnulerenButton}>
          <Text style={styles.Annuleren}>Annuleren </Text>
          </View>
        </TouchableWithoutFeedback>

          <View style={styles.Niveau}>
            <Text style={styles.NiveauText}>Wat is je doel?</Text>
          </View>



          <TouchableWithoutFeedback
        style={styles.button}
        onPress={() => navigation.navigate("")}
      >
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}> Lenigheid trainen </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        style={styles.button}
        onPress={() => navigation.navigate("")}
      >
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}> Tot rust komen </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        style={styles.button}
        onPress={() => navigation.navigate("")}
      >
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}> Sterker worden </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        style={styles.button}
        onPress={() => navigation.navigate("")}
      >
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}> Afvallen </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        style={styles.button}
        onPress={() => navigation.navigate("")}
      >
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}> Herstellen </Text>
        </View>
      </TouchableWithoutFeedback>



        <TouchableWithoutFeedback
        style={styles.nextButton}
        onPress={() => navigation.navigate("MaakRoutineAi3")}
      >
        <View style={styles.nextButtonContainer}>
          <Text style={styles.nextButtonText}> Volgende </Text>
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
      top: -140,
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
    top: -175,
    left: 140,
},

Annuleren: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF9C64",
},

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  buttonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#FF9C64",
    borderRadius: 25,
    marginVertical: 10,
    width: "80%",
    height: 50,
  },
  buttonText: {
    color: "#FF9C64",
  },

    Niveau: {
        top: -20,
        left: 0,
    },

    NiveauText: {
        fontSize: 20,
        fontWeight: "bold",
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
    top: 125,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

});
    
export default MaakRoutineAi2;