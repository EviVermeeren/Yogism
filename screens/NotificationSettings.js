import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import Notifications from "../components/Notifications.js";

const NotificationSettings = ({ navigation }) => {
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
        <Text style={styles.h1}>Meldingen </Text>
      </View>

      <View style={styles.meldingen}>
        <Notifications
          text="Evi VermeÃªren heeft je post geliked."
          onPress={() => navigation.navigate("Settings")}
        />
        <Notifications
          text="Glenn Vinck reageerde op je bericht."
          onPress={() => navigation.navigate("Beveiliging")}
        />
        <Notifications
          text="Brend Van den Eynde heeft jouw routine bewaard."
          onPress={() => navigation.navigate("Abonnement")}
        />
        <Notifications
          text="Yente Beyens reageerde op je bericht."
          onPress={() => navigation.navigate("")}
        />
        <Notifications
          text="Yannick heeft Brend uit zijn vriendenlijst verwijderd."
          onPress={() => navigation.navigate("")}
        />
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
    paddingLeft: "5%",
    height: 400,
    marginTop: -270,
    gap: 10,
  },
});

export default NotificationSettings;
