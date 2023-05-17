import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
 TextInput, 
 TouchableOpacity,
} from "react-native";

const Contact = ({ navigation }) => {
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
          <Text style={styles.h1}> Contact </Text>
        </View>
  
        <View style={styles.formContainer}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Naam</Text>
            <TextInput
              style={styles.input}
              placeholder="Gebruikersnaam..."
            />
          </View>
  
          <View style={styles.formGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Zet hier je mailadres neer..."
            />
          </View>
  
          <View style={styles.formGroup}>
            <Text style={styles.label}>Je bericht</Text>
            <TextInput
              style={styles.textarea}
              placeholder="Begin iets te typen..."
            />
          </View>
  
          <TouchableOpacity style={styles.button}  onPress={() => {
              navigation.goBack();
            }} >
            <Text style={styles.buttonText}>Verzenden</Text>
          </TouchableOpacity>
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
      left: -20,
    },
  
    logo: {
      width: 50,
      height: 50,
      right: 95,
    },
  
    meldingen: {
      display: "flex",
      flexDirection: "column",
      paddingLeft: 40,
      height: 400,
      marginTop: -200,
      gap: 10,
    },

////////////////////////////////////////////////////////////////////////////////////////////////////////////

    container: {
        paddingHorizontal: 20,
        paddingVertical: 30,
      },
      formGroup: {
        marginBottom: 20,
        top: 75
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
        marginTop: 10,
        fontSize: 16,
        color: "#444",
        height: 75,
      },
      textarea: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 25,
        paddingHorizontal: 10,
        paddingVertical: 8,
        fontSize: 16,
        color: "#444",
        height: 200,
        textAlignVertical: "top",
      },
      button: {
        backgroundColor: "#FF9C64",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 25,
        alignItems: "center",
        marginTop: 100,
      },
      buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
      },

  });

  
  
  export default Contact;