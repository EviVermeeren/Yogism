import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Vakje from "../components/Vakje.js";

const Profiel = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.h1}>Mijn profiel</Text>

          <TouchableWithoutFeedback
            onPress={() => {
              // navigation.navigate("Love");
            }}
          >
            <Image
              style={styles.logo}
              source={require("../media/settings.png")}
              resizeMode="contain"
            />
          </TouchableWithoutFeedback>
        </View>

        <Image style={styles.avatar} source={require("../media/avatar.jpg")} />
        <View style={styles.profilename}>
          <Text style={styles.name}>Evi Vermeêren</Text>
          <Text style={styles.pro}>PRO</Text>
        </View>
        <Text style={styles.follow}>Volgend</Text>
        <View style={styles.profilestats}>
          <View style={styles.numbers}>
            <Text style={styles.number}>25</Text>
            <Text style={styles.title}>Volgers</Text>
          </View>
          <View style={styles.numbers}>
            <Text style={styles.number}>25</Text>
            <Text style={styles.title}>Volgend</Text>
          </View>
          <View style={styles.numbers}>
            <Text style={styles.number}>3</Text>
            <Text style={styles.title}>Posts</Text>
          </View>
        </View>

        <View style={styles.vakjes}>
          <Vakje text="Activiteit" />
          <Vakje small="Level 1" text="Beginner" />
        </View>

        <View style={styles.headersflex}>
          <Text style={styles.headers}>Routines van Evi</Text>
          <Text style={styles.watch}>Bekijk alles → </Text>
        </View>

        <ScrollView style={styles.horizontalView} horizontal={true}>
          <View>
            <TouchableOpacity style={styles.routine}>
              <Image
                style={styles.ochtedHarmonie}
                source={require("../media/ochtedHarmonie.png")}
              />
            </TouchableOpacity>
            <View style={styles.routineInfo}>
              <Text style={styles.titelRoutine}>Ochtendharmonie</Text>
              <Text style={styles.infoRoutine}>12 min • 8 poses</Text>
            </View>
          </View>

          <View>
            <TouchableOpacity style={styles.routine}>
              <Image
                style={styles.ochtedHarmonie}
                source={require("../media/ochtedHarmonie.png")}
              />
            </TouchableOpacity>
            <View style={styles.routineInfo}>
              <Text style={styles.titelRoutine}>Ochtendharmonie</Text>
              <Text style={styles.infoRoutine}>12 min • 8 poses</Text>
            </View>
          </View>

          <View>
            <TouchableOpacity style={styles.routine}>
              <Image
                style={styles.ochtedHarmonie}
                source={require("../media/ochtedHarmonie.png")}
              />
            </TouchableOpacity>
            <View style={styles.routineInfo}>
              <Text style={styles.titelRoutine}>Ochtendharmonie</Text>
              <Text style={styles.infoRoutine}>12 min • 8 poses</Text>
            </View>
          </View>
        </ScrollView>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    gap: 70,
    marginLeft: 120,
  },

  h1: {
    fontSize: 24,
    fontWeight: "bold",
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
  },

  number: {
    fontSize: 20,
    fontWeight: "bold",
  },

  title: {
    fontSize: 14,
  },

  logo: {
    width: 60,
    height: 60,
  },

  avatar: {
    width: 167,
    height: 167,
    borderRadius: 100,
    marginTop: 40,
  },

  profilename: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    gap: 10,
  },

  profilestats: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    gap: 80,
  },

  vakjes: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    gap: 8,
  },

  pro: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#B0EDF1",
    borderRadius: 16,
    paddingHorizontal: 12,
  },

  follow: {
    fontSize: 16,
    color: "#FF9C64",
    marginTop: 18,
    paddingHorizontal: 70,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#FF9C64",
    borderRadius: 16,
  },

  numbers: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },

  headers: {
    fontSize: 24,
    fontWeight: "bold",
  },

  headersflex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 70,
    marginTop: 40,
  },

  watch: {
    fontSize: 14,
    color: "#7F7F7F",
  },

  horizontalView: {
    flexDirection: "row",
    overflow: "scroll",
    marginTop: 20,
    marginBottom: 30,
  },

  routine: {
    width: 211,
    height: 112,
    borderRadius: 10,
    marginRight: 10,
    left: 25,
  },

  ochtedHarmonie: {
    left: -15,
  },

  titelRoutine: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },

  infoRoutine: {
    fontSize: 12,
    color: "#7F7F7F",
  },

  routineInfo: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 5,
    marginLeft: 40,
  },
});

export default Profiel;
