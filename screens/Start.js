import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ImageBackground,
} from "react-native";
import CustomButtonYellow from "../components/ButtonYellow.js";
import CustomButtonGrey from "../components/ButtonGrey.js";

const Start = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../media/bgi.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
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
      </ImageBackground>
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

  backgroundImage: {
    width: "100%",
    height: "120%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
});

export default Start;
