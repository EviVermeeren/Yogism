import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
  Text,
  ScrollView,
} from "react-native";
import Line2 from "../components/Line2.js";

const ExerciseSearch = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.h1}>Zoeken</Text>

          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate("Myyoga");
            }}
          >
            <Text style={styles.orange}>Annuleren</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.search}>
          <Image style={styles.icon} source={require("../media/search.png")} />
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate("Search");
            }}
          >
            <Text style={styles.texts}>Zoeken ...</Text>
          </TouchableWithoutFeedback>
        </View>

        <Text style={styles.h2}>Recent</Text>

        <View style={styles.history}>
          <Text style={styles.h3}>Ontspannend</Text>
          <Image style={styles.icon2} source={require("../media/x.png")} />
        </View>
        <Line2 />

        <View style={styles.history}>
          <Text style={styles.h3}>Kind</Text>
          <Image style={styles.icon2} source={require("../media/x.png")} />
        </View>
        <Line2 />

        <Text style={styles.h2}>Trending</Text>
        <View style={styles.history}>
          <Text style={styles.h3}>Tegen nekpijn</Text>
          <Image style={styles.icon2} source={require("../media/x.png")} />
        </View>
        <Line2 />

        <View style={styles.history}>
          <Text style={styles.h3}>Rugklachten</Text>
          <Image style={styles.icon2} source={require("../media/x.png")} />
        </View>
        <Line2 />

        <Text style={styles.h2}>Niveau</Text>
        <View style={styles.history}>
          <Text style={styles.h3}>Hoog</Text>
          <Image style={styles.icon2} source={require("../media/x.png")} />
        </View>
        <Line2 />

        <View style={styles.history}>
          <Text style={styles.h3}>Middelmatig</Text>
          <Image style={styles.icon2} source={require("../media/x.png")} />
        </View>
        <Line2 />

        <View style={styles.history}>
          <Text style={styles.h3}>Laag</Text>
          <Image style={styles.icon2} source={require("../media/x.png")} />
        </View>
        <Line2 />
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

  orange: {
    color: "#FF7A00",
    fontWeight: "bold",
  },
  line: {
    backgroundColor: "#F2F2F2",
    height: 8,
    width: "100%",
  },
  texts: {
    color: "#7F7F7F",
    fontSize: 12,
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
    fontSize: 14,
    color: "#FF9C64",
    fontWeight: "bold",
    paddingBottom: 15,
    paddingLeft: 40,
    borderBottomColor: "#FF9C64",
    paddingRight: 40,
    borderBottomWidth: 2,
  },

  headers2: {
    fontSize: 14,
    color: "#7F7F7F",
    fontWeight: "bold",
    paddingBottom: 15,
    paddingLeft: 40,
    paddingRight: 40,
  },

  headersflex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 70,
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

  icon: {
    width: 20,
    height: 20,
    marginLeft: -210,
    marginRight: 10,
  },

  search: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    gap: 10,
    width: 350,
    height: 40,
    borderRadius: 24,
    backgroundColor: "#F2F2F2",
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  h2: {
    fontSize: 14,
    color: "#212121",
    fontWeight: "bold",
    marginLeft: -300,
    paddingTop: 20,
  },

  h3: {
    fontSize: 14,
    color: "#212121",
    paddingBottom: 15,
    paddingTop: 20,
  },

  history: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 350,
  },

  icon2: {
    width: 20,
    height: 20,
  },
});

export default ExerciseSearch;
