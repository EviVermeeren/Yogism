import React from "react";
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FAQ = ({ navigation }) => {
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
        <Text style={styles.h1}>FAQ / Gids</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={24} color="gray" />
          <TextInput style={styles.searchInput} placeholder="Zoeken ..." />
        </View>
        <Text style={styles.heading}>Vaakgestelde Vragen</Text>
        <View style={styles.faqList}>
          {[...Array(6)].map((_, index) => (
            <TouchableOpacity key={index} style={styles.faqItem}>
              <Text style={styles.faqText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <Ionicons name="chevron-down-outline" size={24} color="gray" />
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.buttonText}>Volledige gids raadplegen</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  backButton: {
    paddingRight: 10,
  },
  logo: {
    width: 50,
    height: 50,
    left: -105,
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    left: -30,    
},

/////////////////////////////////////////////////////////////////////////////////////////////////////

  content: {
    flex: 1,
    padding: 20,
    paddingTop: 70,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 20,
    marginTop: -30,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  faqList: {
    marginBottom: 20,
  },
  faqItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  faqText: {
    flex: 1,
    fontSize: 16,
    marginRight: 10,
    height: 20,
  },
  button: {
    backgroundColor: "#B0EDF1",
    paddingVertical: 20,
    paddingHorizontal:20,
    borderRadius: 25,
    alignItems: "center",
    },
    buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    },
    });
    
    export default FAQ;
