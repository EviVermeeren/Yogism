import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";

const Settings = ({ navigation }) => {
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
        <Text style={styles.h1}>Instellingen</Text>
      </View>

      <View style={styles.SettingsItems}>
        <View style={styles.itemContainer}>
          <Image
            style={styles.notificationImage}
            source={require("../media/mijnGegevens.png")}
          />
          <Image
            style={styles.pijltjeVolgende1}
            source={require("../media/pijltjeVolgende.png")}
          ></Image>
          <Text style={styles.text}>Mijn gegevens</Text>
        </View>
      </View>

      <View style={styles.SettingsItems}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Beveiliging")}
        >
          <View style={styles.itemContainer}>
            <Image
              style={styles.notificationImage}
              source={require("../media/beveiliging.png")}
            />
            <Image
              style={styles.pijltjeVolgende2}
              source={require("../media/pijltjeVolgende.png")}
            ></Image>
            <Text style={styles.text}>Beveiliging</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.SettingsItems}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Abonnement")}
        >
          <View style={styles.itemContainer}>
            <Image
              style={styles.notificationImage}
              source={require("../media/abonnement.png")}
            />
            <Image
              style={styles.pijltjeVolgende3}
              source={require("../media/pijltjeVolgende.png")}
            ></Image>
            <Text style={styles.text}>Abonnement</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.SettingsItems}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("NotificationSettings")}
        >
          <View style={styles.itemContainer}>
            <Image
              style={styles.notificationImage}
              source={require("../media/meldingen.png")}
            />
            <Image
              style={styles.pijltjeVolgende4}
              source={require("../media/pijltjeVolgende.png")}
            ></Image>
            <Text style={styles.text}>Meldingen</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.SettingsItems}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("")}>
          <View style={styles.itemContainer}>
            <Image
              style={styles.notificationImage}
              source={require("../media/faqGids.png")}
            />
            <Image
              style={styles.pijltjeVolgende5}
              source={require("../media/pijltjeVolgende.png")}
            ></Image>
            <Text style={styles.text}>FAQ / Gids</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.SettingsItems}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("")}>
          <View style={styles.itemContainer}>
            <Image
              style={styles.notificationImage}
              source={require("../media/contact.png")}
            />
            <Image
              style={styles.pijltjeVolgende6}
              source={require("../media/pijltjeVolgende.png")}
            ></Image>
            <Text style={styles.text}>Contact</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.eenProbleemRapporterenContainer}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("")}>
          <View style={styles.itemContainer}>
            <Image
              style={styles.eenProbleemRapporterenImage}
              source={require("../media/eenProbleemRapporteren.png")}
            />
            <Image
              style={styles.pijltjeVolgende7}
              source={require("../media/pijltjeVolgende.png")}
            ></Image>
            <Text style={styles.eenProbleemRapporterenText}>
              Een probleem rapporteren
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.SettingsItems}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("")}>
          <View style={styles.itemContainer}>
            <Image
              style={styles.notificationImage}
              source={require("../media/logUit.png")}
            />
            <Image
              style={styles.pijltjeVolgende8}
              source={require("../media/pijltjeVolgende.png")}
            ></Image>
            <Text style={styles.text}>Log uit</Text>
          </View>
        </TouchableWithoutFeedback>

        {/*    -------------------------------------------------    */}
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
    width: "100%",
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
  eenProbleemRapporterenContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  eenProbleemRapporterenImage: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  eenProbleemRapporterenText: {
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
  pijltjeVolgende3: {
    width: 25,
    height: 25,
    left: 300,
  },
  pijltjeVolgende4: {
    width: 25,
    height: 25,
    left: 300,
  },
  pijltjeVolgende5: {
    width: 25,
    height: 25,
    left: 300,
  },
  pijltjeVolgende6: {
    width: 25,
    height: 25,
    left: 300,
  },
  pijltjeVolgende7: {
    width: 25,
    height: 25,
    left: 300,
  },
  pijltjeVolgende8: {
    width: 25,
    height: 25,
    left: 300,
  },
});
export default Settings;
