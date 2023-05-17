import React from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet, Image, TextInput} from "react-native";

const MaakRoutine3 = ({ navigation }) => {
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
        <Text style={styles.h1}>Stap 3 van 3 </Text>
      </View>

      <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("MaakRoutine");
          }}>
          <View style={styles.AnnulerenButton}>
          <Text style={styles.Annuleren}>Annuleren </Text>
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.foto}>
          <Image style={styles.sleep} source={require("../media/Content.png")}/>
        </View>

        <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Geef je routine een naam</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholderTextColor="#B0B0B0" />
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Text style={styles.detailTitle}>Aantal poses</Text>
          <Text style={styles.detailText}>6 poses</Text>
          <Image style={styles.pijl} source={require("../media/arrowright2.png")} />
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailTitle}>Poseertijd</Text>
          <Text style={styles.detailText}>45 seconden</Text>
          <Image style={styles.pijl} source={require("../media/arrowright2.png")} />
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailTitle}>Tijd tussen poses</Text>
          <Text style={styles.detailText}>30 seconden</Text>
          <Image style={styles.pijl} source={require("../media/arrowright2.png")} />
        </View>

        <View style={styles.detailRow2}>
          <Text style={styles.detailTitle}>Totaaltijd routine</Text>
          <Image style={styles.clock} source={require("../media/clock.png")} />
          <Text style={styles.detailText}>12 minuten</Text>
        </View>
        </View>

      <TouchableWithoutFeedback
        style={styles.nextButton}
        onPress={() => navigation.navigate("BibliotheekRoutines")}
      >
        <View style={styles.nextButtonContainer}>
          <Text style={styles.nextButtonText}>Opslaan </Text>
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
      top: 0,
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
    top: -35,
    left: 300,
},

Annuleren: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF9C64",
},

sleep: {
    fontSize: 16,
    color: "grey",
    top: -5,
    left: 110,
    width: 400,
    left: -15,
},


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  titleContainer: {
    marginTop: 30,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  inputContainer: {
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    borderRadius: 50,
  },
  input: {
    fontSize: 16,
  },
  detailsContainer: {
    marginTop: 40,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  detailRow2: {
    flexDirection: "row",
    alignItems: "center",
    top: 140,
  },
  detailTitle: {
    flex: 1,
  },
  detailText: {
    flex: 1,
    textAlign: "right",
    color: "grey",
  },
  
pijl: {
    width: 20,
    height: 20,
     left: 10,
 },
clock: {
    left: 100,
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
    top: 150,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

});
    
export default MaakRoutine3;