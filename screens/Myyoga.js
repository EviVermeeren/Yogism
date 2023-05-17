import { StatusBar } from "expo-status-bar";
import LinearGradient from "react-native-linear-gradient";
const gradientColors = ["#FFE9AF", "#FF9C64"];
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const Myyoga = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.h1}>Mijn Yoga</Text>

        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("Favorites");
          }}
        >
          <Image
            style={styles.logo}
            source={require("../media/heart.png")}
            resizeMode="contain"
          />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.search}>
        <Image style={styles.icon} source={require("../media/search.png")} />
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("ExerciseSearch");
          }}
        >
          <Text style={styles.texts}>Zoeken ...</Text>
        </TouchableWithoutFeedback>
      </View>

            <TouchableWithoutFeedback   onPress={() => {
            navigation.navigate("MaakRoutine");
          }}>
        <View style={styles.headersflex}>
          <Text style={styles.headers}>Maak een nieuwe routine</Text>
          <Image style={styles.icons} source={require("../media/addcirclew.png")} />
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.headersflex2}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("Bibliotheek");
          }}
        >
          <Text style={styles.headers2}>Bibliotheek</Text>
        </TouchableWithoutFeedback>
        <Image
          style={styles.icons2}
          source={require("../media/arrowright2.png")}
        />
      </View>

      <View style={styles.headersflex4}>
        <Text style={styles.headers3}>Mijn routines</Text>
        <Text style={styles.watch3}>Bekijk alles → </Text>
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

      <View style={styles.headersflex4}>
        <Text style={styles.headers3}>Mijn opnames</Text>
        <Text style={styles.watch3}>Bekijk alles → </Text>
      </View>

      <ScrollView style={styles.horizontalView} horizontal={true}>
        <View>
          <TouchableOpacity style={styles.routine}>
            <Image
              style={styles.ochtedHarmonie}
              source={require("../media/ochtedHarmonie.png")}
            />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.routine}>
            <Image
              style={styles.ochtedHarmonie}
              source={require("../media/ochtedHarmonie.png")}
            />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.routine}>
            <Image
              style={styles.ochtedHarmonie}
              source={require("../media/ochtedHarmonie.png")}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 60,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    gap: 90,
    marginLeft: 130,
  },

  h1: {
    fontSize: 24,
    fontWeight: "bold",
  },

  texts: {
    color: "#7F7F7F",
    fontSize: 12,
    marginLeft: -140,
  },

  icon: {
    width: 20,
    height: 20,
    marginLeft: -210,
  },

  search: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    gap: 160,
    width: 350,
    height: 40,
    borderRadius: 24,
    backgroundColor: "#F2F2F2",
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  logo: {
    width: 30,
    height: 30,
  },

  headersflex: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: 350,
    marginTop: 10,
    borderRadius: 24,
    backgroundColor: "#FF9C64",
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  headers: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },

  icons: {
    width: 50,
    height: 50,
    marginTop: 10,
  },

  headersflex2: {
    alignItems: "center",
    justifyContent: "center",
    height: 64,
    width: 350,
    marginTop: 10,
    borderRadius: 24,
    backgroundColor: "#B0EDF1",
    paddingHorizontal: 10,
    marginBottom: 20,
    flexDirection: "row",
    gap: 190,
  },

  headers2: {
    fontSize: 18,
    color: "#212121",
  },

  icons2: {
    width: 20,
    height: 20,
  },

  headers3: {
    fontSize: 24,
    fontWeight: "bold",
  },

  headersflex3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 110,
    marginTop: 40,
  },

  headersflex4: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 110,
  },

  watch3: {
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

export default Myyoga;
