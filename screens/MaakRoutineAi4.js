import React from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet, Image, TextInput} from "react-native";

const MaakRoutineAi4 = ({ navigation }) => {
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
        <Text style={styles.h1}>Jouw routine </Text>
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
          <Image style={styles.sleep1} source={require("../media/Content.png")}/>
        </View>

        <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Geef je routine een naam</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholderTextColor="#B0B0B0" />
      </View>
    
      <Text style={styles.sleep}>Sleep om te herschikken </Text>


      <View style={styles.cardList}>
        {[...Array(3)].map((_, index) => (
          <View key={index} style={styles.cardContainer}>
            <View style={styles.minusIconContainer}>
              <Image
                style={styles.minusIcon}
                source={require("../media/minus.png")}
                resizeMode="contain"
              />
            </View>
            <Image
              style={styles.cardImage}
              source={require("../media/ChildPose.png")}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Child's Pose</Text>
              <Text style={styles.cardSubtitle}>2 min</Text>
            </View>
            <View style={styles.hamburgerButton}>
              <Image
                style={styles.hamburgerIcon}
                source={require("../media/hamburgerMenu.png")}
                resizeMode="contain"
              />
            </View>
          </View>
        ))}
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
        top: 10,
        left: 100,
        width: 400,
      justifyContent: "center",
    },

    sleep1: {
      fontSize: 16,
      color: "grey",
      top: -35,
      left: 110,
      width: 400,
      left: -15,
  },
    
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
      cardList: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        top: 20,
      },
      cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
      },
      cardImage: {
        width: 70,
        height: 70,
        marginRight: 20,
      },
      cardContent: {
        flex: 1,
      },
      cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      cardSubtitle: {
        fontSize: 14,
        color: '#666666',
      },
      cardAdd: {
        backgroundColor: '#FF9C64',
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      cardAddText: {
        color: '#FFFFFF',
        fontSize: 24,
      },
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
        top: -30,
        left: 15,
      },
      inputContainer: {
        backgroundColor: "#F6F6F6",
        borderRadius: 10,
        borderRadius: 50,
        top: -20,
        height: 60,
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
        top: 0,
      },
      nextButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
      },
    
    });
        
    export default MaakRoutineAi4;