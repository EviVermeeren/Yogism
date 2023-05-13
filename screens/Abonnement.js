import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";

const Abonnement = ({ navigation }) => {
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
        <Text style={styles.h1}>Abonnement</Text>
      </View>

      <View>
        <Text style={styles.h2}>Huidig abonnement</Text>
      </View>

      <View style={styles.gratis}>
        <Text style={styles.gratisText}>Gratis</Text>
        <Text style={styles.beschrijving}>
          Onbeperkte toegang tot een beperkt aantal functies.
        </Text>

        <View>
          <Text style={styles.h2Pro}>Pro abonnementen </Text>
        </View>

        <View>
          <Image
            style={styles.proJaarlijks}
            source={require("../media/proJaarlijks.png")}
            resizeMode="contain"
          />

          <Image
            style={styles.proMaandelijks}
            source={require("../media/proMaandelijks.png")}
            resizeMode="contain"
          />
        </View>

        <View style={styles.canel}>
          <Text>Cancel your subscription at any time</Text>
        </View>

        <View style={styles.subcriptions}>
          <Text>
            Subscriptions will automatically renew unless canceled withing
            24-hours before the end of the current period. You can cancel
            anytime through your Google Play Store settings. Yogism pro lifetime
            is a one time in-app purchase.
          </Text>
        </View>

        <View style={styles.privacy}>
          <Text style={styles.privacy2}>Privacy Policy</Text>
        </View>

        <View style={styles.terms}>
          <Text style={styles.terms2}>Terms & conditions</Text>
        </View>
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
  h2: {
    fontSize: 20,
    fontWeight: "bold",
    top: 130,
    left: 0,
  },
  h2Pro: {
    fontSize: 20,
    fontWeight: "bold",
    top: 60,
    left: 0,
  },
  gratis: {
    borderWidth: 2,
    borderColor: "#B0EDF1",
    borderStyle: "solid",
    borderRadius: 20,
    top: 140,
    height: 100,
    width: 370,
  },
  gratisText: {
    fontSize: 22,
    fontWeight: "bold",
    top: 10,
    left: 10,
  },
  beschrijving: {
    fontSize: 16,
    top: 10,
    left: 10,
  },
  proJaarlijks: {
    top: 70,
    left: 0,
    width: 343,
    height: 137,
    marginLeft: "auto",
    marginRight: "auto",
  },
  proMaandelijks: {
    top: 70,
    left: 0,
    width: 343,
    height: 85,
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },
  canel: {
    top: 150,
    left: 65,
  },
  subcriptions: {
    top: 170,
    left: 0,
    textAlign: "center",
  },
  privacy: {
    top: 190,
    left: 50,
  },

  privacy2: {
    fontSize: 16,
    fontWeight: "bold",
  },

  terms: {
    top: 170,
    left: 180,
  },

  terms2: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default Abonnement;
