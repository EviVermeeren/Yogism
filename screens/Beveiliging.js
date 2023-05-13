import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";

const Beveiliging = ({ navigation }) => {
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
        <Text style={styles.h1}>Beveiliging</Text>
      </View>

      <View style={styles.SettingsItems}>
        <View style={styles.itemContainer}>
          <Image
            style={styles.notificationImage}
            source={require("../media/wachtwoordWijzigen.png")}
          />
          <Image
            style={styles.pijltjeVolgende1}
            source={require("../media/pijltjeVolgende.png")}
          ></Image>
          <Text style={styles.text}> Wachtwoord Wijzigen</Text>
        </View>
      </View>

      <View style={styles.SettingsItems}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("")}>
          <View style={styles.itemContainer}>
            <Image
              style={styles.notificationImage}
              source={require("../media/accountVerwijderen.png")}
            />
            <Image
              style={styles.pijltjeVolgende2}
              source={require("../media/pijltjeVolgende.png")}
            ></Image>
            <Text style={styles.text}>Account Verwijderen</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "flex-start",
  },
  header: {
    position: "absolute",
    top: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingTop: 30, // add padding top to prevent content from being hidden behind status bar,
    left: -15,
  },
  backButton: {
    paddingRight: 10,
  },
  logo: {
    width: 50,
    height: 50,
    left: -60,
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
  },
  SettingsItems: {
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    top: 90,
    borderBottomWidth: 0.5,
    borderBottomColor: "#F2F2F2",
    borderBottomStyle: "solid",
    width: "100%",
  },
  notificationImage: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  text: {
    fontSize: 18,
  },
  pijltjeVolgende1: {
    width: 25,
    height: 25,
    left: 300,
  },
  pijltjeVolgende2: {
    width: 25,
    height: 25,
    left: 300,
  },
});
export default Beveiliging;
