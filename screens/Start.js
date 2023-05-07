import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import CustomButtonYellow from "../components/ButtonYellow.js";
import CustomButtonGrey from "../components/ButtonGrey.js";

const Start = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../media/logo.png")}
        resizeMode="contain"
      />

      <CustomButtonYellow
        title="Log in"
        onPress={() => {
          navigation.navigate("Login");
        }}
        disabled={false}
      />

      <CustomButtonGrey
        title="Maak een account aan"
        onPress={() => {
          navigation.navigate("Register");
        }}
        disabled={false}
      />

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 100,
  },

  logo: {
    width: 250,
    height: 159,
    marginTop: 210,
  },
});

export default Start;
