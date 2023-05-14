import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/*    -------------------------------------------------    */}

      <Image
        style={styles.groeneCirkel}
        source={require("../media/ellipse14.png")}
      />
      <Image
        style={styles.oranjeStreep}
        source={require("../media/ellipse15.png")}
      />
      <Image
        style={styles.groeneStreep}
        source={require("../media/ellipse16.png")}
      />

      {/*    -------------------------------------------------    */}

      <Text style={styles.heyUser}>Hey, Evi!</Text>
      <Text style={styles.welcome}>Welkom terug!</Text>

      {/*    -------------------------------------------------    */}

      <TouchableOpacity
        style={styles.startRoutine}
        onPress={() => {
          navigation.navigate("RoutineDetail");
        }}
      >
        <Image
          style={styles.gradientAchtergrond}
          source={require("../media/gradientAchtergrond.png")}
        />
        <Text style={styles.startRoutineText}>Start je routine</Text>
        <Text style={styles.cheerfulMood}>Cheerful mood</Text>
        <View style={styles.bottomRow}>
          <Image
            style={styles.yogaPose}
            source={require("../media/yogaPose.png")}
          />
          <Image
            style={styles.buttonPlay}
            source={require("../media/buttonPlay.png")}
          />
          <Image
            style={styles.playButton}
            source={require("../media/playButton.png")}
          />
          <Text style={styles.durationText}>12-16 min</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bell}
        onPress={() => {
          navigation.navigate("Notification");
        }}
      >
        <View style={styles.icon}>
          <Feather name="bell" size={24} color="black" />
        </View>
      </TouchableOpacity>

      {/*    -------------------------------------------------    */}

      <Text style={styles.verkenPoses}>Verken Poses</Text>
      <TouchableOpacity style={styles.buttonBekijkAlles1}>
        <Image
          style={styles.pijltje1}
          source={require("../media/pijltje.png")}
        />
        <Text style={styles.bekijkAlles2}>Bekijk alles</Text>
      </TouchableOpacity>

      {/*    -------------------------------------------------    */}

      <ScrollView style={styles.scrollView} horizontal={true}>
        <TouchableOpacity style={styles.buttonLowImpact}>
          <Text style={styles.buttonText}>Low impact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLowImpact}>
          <Text style={styles.buttonText}>Snel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLowImpact}>
          <Text style={styles.buttonText}>Beginner</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLowImpact}>
          <Text style={styles.buttonText}>Geavanceerd</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLowImpact}>
          <Text style={styles.buttonText}>Intens</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLowImpact}>
          <Text style={styles.buttonText}>Kracht</Text>
        </TouchableOpacity>
      </ScrollView>

      {/*    -------------------------------------------------    */}

      <View style={styles.horizontalScroll}>
        <ScrollView horizontal={true}>
          <TouchableOpacity style={styles.pose1}>
            <Image
              style={styles.crowPose1}
              source={require("../media/crowPose.png")}
            />
            <Text style={styles.titelPose1}>Crow Pose</Text>
            <Text style={styles.moeilijkheid1}>Beginner</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.pose2}>
            <Image
              style={styles.crowPose2}
              source={require("../media/crowPose.png")}
            />
            <Text style={styles.titelPose2}>Crow Pose</Text>
            <Text style={styles.moeilijkheid2}>Beginner</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.pose3}>
            <Image
              style={styles.crowPose3}
              source={require("../media/crowPose.png")}
            />
            <Text style={styles.titelPose3}>Crow Pose</Text>
            <Text style={styles.moeilijkheid3}>Beginner</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.pose4}>
            <Image
              style={styles.crowPose4}
              source={require("../media/crowPose.png")}
            />
            <Text style={styles.titelPose4}>Crow Pose</Text>
            <Text style={styles.moeilijkheid4}>Beginner</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/*    -------------------------------------------------    */}

      <Text style={styles.routines}>Routines </Text>
      <TouchableOpacity style={styles.buttonBekijkAlles2}>
        <Image
          style={styles.pijltje2}
          source={require("../media/pijltje.png")}
        />
        <Text style={styles.bekijkAlles2}>Bekijk alles</Text>
      </TouchableOpacity>

      {/*    -------------------------------------------------    */}

      <ScrollView style={styles.horizontalView} horizontal={true}>
        <TouchableOpacity style={styles.routine}>
          <Image
            style={styles.ochtedHarmonie}
            source={require("../media/ochtedHarmonie.png")}
          />
          <View style={styles.routineInfo}>
            <Text style={styles.titelRoutine}>Octhendharmonie</Text>
            <Text style={styles.infoRoutine}>12 min • 8 poses</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.routine}>
          <Image
            style={styles.ochtedHarmonie}
            source={require("../media/ochtedHarmonie.png")}
          />
          <View style={styles.routineInfo}>
            <Text style={styles.titelRoutine}>Octhendharmonie</Text>
            <Text style={styles.infoRoutine}>12 min • 8 poses</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.routine}>
          <Image
            style={styles.ochtedHarmonie}
            source={require("../media/ochtedHarmonie.png")}
          />
          <View style={styles.routineInfo}>
            <Text style={styles.titelRoutine}>Octhendharmonie</Text>
            <Text style={styles.infoRoutine}>12 min • 8 poses</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      {/*    -------------------------------------------------    */}

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  groeneCirkel: {
    width: 339,
    height: 190,
    position: "absolute",
    top: 0,
    left: 0,
  },

  oranjeStreep: {
    width: 360,
    height: 200,
    position: "absolute",
    top: -25,
    left: 0,
  },

  groeneStreep: {
    width: 380,
    height: 250,
    position: "absolute",
    top: -40,
    right: 70,
  },

  ////////////////////////////////////////////////////////////////////////////////////////////////////////

  heyUser: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    top: 50,
    left: -120,
  },

  welcome: {
    color: "orange",
    top: 50,
    left: -130,
  },

  bell: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    left: 155,
    top: 10,
  },

  icon: {
    justifyContent: "center",
    alignItems: "center",
  },

  ////////////////////////////////////////////////////////////////////////////////////////////////////////

  startRoutine: {
    backgroundColor: "lightgrey",
    width: 350,
    height: 120,
    position: "absolute",
    top: 230,
    left: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  startRoutineText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    top: 10,
    left: 20,
  },

  bottomRow: {
    flexDirection: "row",
    position: "absolute",
    bottom: 20,
    right: 20,
    alignItems: "center",
  },

  gradientAchtergrond: {
    width: 400,
    height: 150,
    top: 15,
    right: 0,
  },

  cheerfulMood: {
    color: "#7F7F7F",
    fontSize: 14,
    top: -85,
    left: -107,
  },

  yogaPose: {
    width: 180,
    height: 210,
    position: "absolute",
    bottom: -25,
    right: -40,
  },

  buttonPlay: {
    top: 5,
    width: 30,
    height: 30,
    right: 200,
  },

  playButton: {
    top: 5,
    width: 10,
    height: 10,
    right: 218,
  },

  durationText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    top: 5,
    right: 200,
  },

  ////////////////////////////////////////////////////////////////////////////////////////////////////////

  verkenPoses: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    top: 270,
    left: -110,
    marginBottom: 5,
  },

  buttonBekijkAlles1: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    top: 245,
    left: 110,
    color: "#FF9C64",
  },

  bekijkAlles1: {
    color: "orange",
  },

  pijltje1: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 6,
    left: 75,
    width: 10,
    height: 10,
  },

  ////////////////////////////////////////////////////////////////////////////////////////////////////////

  scrollView: {
    flexDirection: "row",
    height: 25,
    width: 400,
    top: 250,
    marginTop: 10,
    marginBottom: 90,
    marginLeft: 50,
  },

  buttonLowImpact: {
    backgroundColor: "#F2F2F2",
    borderRadius: 20,
    paddingTop: 3,
    paddingLeft: 20,
    paddingRight: 20,
    marginRight: 10,
    height: 30,
  },

  buttonSnel: {
    backgroundColor: "#F2F2F2",
    borderRadius: 20,
    paddingTop: 3,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginRight: 10,
  },
  buttonBeginner: {
    backgroundColor: "#F2F2F2",
    borderRadius: 20,
    paddingTop: 3,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginRight: 10,
  },
  buttonGeavanceerd: {
    backgroundColor: "#F2F2F2",
    borderRadius: 20,
    paddingTop: 3,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginRight: 10,
  },
  buttonIntens: {
    backgroundColor: "#F2F2F2",
    borderRadius: 20,
    paddingTop: 3,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginRight: 10,
  },
  buttonKracht: {
    backgroundColor: "#F2F2F2",
    borderRadius: 20,
    paddingTop: 3,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginRight: 40,
  },

  buttonText: {
    color: "#7F7F7F",
    fontWeight: "bold",
    fontSize: 13,
    textAlign: "center",
    justifyContent: "center",
  },

  ////////////////////////////////////////////////////////////////////////////////////////////////////////

  horizontalScroll: {
    height: 160,
    marginTop: 180,
    marginBottom: 10,
  },

  pose1: {
    backgroundColor: "#FFE9AF",
    width: 110,
    height: 100,
    position: "absolute",
    top: 460,
    left: 20,
    borderRadius: 20,
  },

  pose1: {
    marginLeft: 20,
  },

  pose2: {
    backgroundColor: "#FFE9AF",
    width: 110,
    height: 100,
    position: "absolute",
    top: 460,
    left: 138,
    borderRadius: 20,
  },

  pose2: {
    marginLeft: 20,
  },

  pose3: {
    backgroundColor: "#FFE9AF",
    width: 110,
    height: 100,
    position: "absolute",
    top: 460,
    left: 255,
    borderRadius: 20,
  },

  pose3: {
    marginLeft: 20,
  },

  pose4: {
    backgroundColor: "#FFE9AF",
    width: 110,
    height: 100,
    position: "absolute",
    top: 460,
    left: 255,
    borderRadius: 20,
  },

  pose4: {
    marginLeft: 20,
  },

  crowPose1: {
    width: 110,
    height: 100,
    backgroundColor: "#FFE9AF",
    borderRadius: 20,
  },

  crowPose2: {
    width: 110,
    height: 100,
    backgroundColor: "#FFE9AF",
    borderRadius: 20,
  },
  crowPose3: {
    width: 110,
    height: 100,
    backgroundColor: "#FFE9AF",
    borderRadius: 20,
  },
  crowPose4: {
    width: 110,
    height: 100,
    backgroundColor: "#FFE9AF",
    borderRadius: 20,
    marginRight: 20,
  },

  titelPose1: {
    color: "black",
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 16,
  },

  titelPose2: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },

  titelPose3: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },

  titelPose4: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },

  moeilijkheid1: {
    fontSize: 14,
    color: "#7F7F7F",
  },

  moeilijkheid2: {
    fontSize: 14,
    color: "#7F7F7F",
  },

  moeilijkheid3: {
    fontSize: 14,
    color: "#7F7F7F",
  },

  moeilijkheid4: {
    fontSize: 14,
    color: "#7F7F7F",
  },

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  routines: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    top: 5,
    left: -130,
  },

  buttonBekijkAlles2: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    top: -15,
    left: 110,
    color: "#FF9C64",
  },

  bekijkAlles2: {
    color: "orange",
  },

  pijltje2: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 6,
    left: 75,
    width: 10,
    height: 10,
  },

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  horizontalView: {
    flexDirection: "row",
    overflow: "scroll",
  },

  routine: {
    width: 211,
    height: 112,
    borderRadius: 10,
    marginRight: 10,
    left: 25,
  },

  ochtedHarmonie: {
    left: -25,
  },

  titelRoutine: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    top: -25,
  },

  infoRoutine: {
    fontSize: 12,
    color: "#7F7F7F",
    top: -25,
  },
});

export default Home;
