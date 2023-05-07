import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import CustomButtonOrange from "../components/ButtonOrange.js";

const RoutineDetail = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            style={styles.logo}
            source={require("../media/back.png")}
            resizeMode="contain"
          />
        </TouchableWithoutFeedback>
        <Text style={styles.h1}>Routine: Cheerful Mood</Text>

        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("Share");
          }}
        >
          <Image
            style={styles.logo}
            source={require("../media/share.png")}
            resizeMode="contain"
            onPress={() => {
              navigation.navigate("Home");
            }}
          />
        </TouchableWithoutFeedback>
      </View>

      <Image
        style={styles.pose}
        source={require("../media/posepic.png")}
        resizeMode="contain"
      ></Image>

      <View style={styles.icons}>
        <View style={styles.box}>
          <Image
            style={styles.icon}
            source={require("../media/flash.png")}
            resizeMode="contain"
          />
          <Text style={styles.boxtext}>Beginner</Text>
        </View>
        <View style={styles.box}>
          <Image
            style={styles.icon}
            source={require("../media/timer.png")}
            resizeMode="contain"
          />
          <Text style={styles.boxtext}>2 minuten</Text>
        </View>
        <View style={styles.box}>
          <Image
            style={styles.icon}
            source={require("../media/yogi.png")}
            resizeMode="contain"
          />
          <Text style={styles.boxtext}>7 poses</Text>
        </View>
      </View>

      <Text style={styles.h4}>Oefeningen in deze routine</Text>

      <View style={styles.oefeningen}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("ExerciseDetail");
          }}
        >
          <Image
            style={styles.posepic}
            source={require("../media/poses.png")}
            resizeMode="contain"
          />
        </TouchableWithoutFeedback>
        <View>
          <Text style={styles.posetext}>Child's Pose</Text>
          <Text style={styles.posetext2}>2 min</Text>
        </View>
      </View>

      <View style={styles.oefeningen}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("ExerciseDetail");
          }}
        >
          <Image
            style={styles.posepic}
            source={require("../media/poses.png")}
            resizeMode="contain"
          />
        </TouchableWithoutFeedback>
        <View>
          <Text style={styles.posetext}>Child's Pose</Text>
          <Text style={styles.posetext2}>2 min</Text>
        </View>
      </View>

      <View style={styles.oefeningen}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("ExerciseDetail");
          }}
        >
          <Image
            style={styles.posepic}
            source={require("../media/poses.png")}
            resizeMode="contain"
          />
        </TouchableWithoutFeedback>
        <View>
          <Text style={styles.posetext}>Child's Pose</Text>
          <Text style={styles.posetext2}>2 min</Text>
        </View>
      </View>

      <View style={styles.oefeningen}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("ExerciseDetail");
          }}
        >
          <Image
            style={styles.posepic}
            source={require("../media/poses.png")}
            resizeMode="contain"
          />
        </TouchableWithoutFeedback>
        <View>
          <Text style={styles.posetext}>Child's Pose</Text>
          <Text style={styles.posetext2}>2 min</Text>
        </View>
      </View>

      <CustomButtonOrange
        title="Start"
        onPress={() => {
          navigation.navigate("RoutineStart");
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
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginTop: 50,
  },

  icon: {
    width: 20,
    height: 20,
  },

  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 340,
    marginTop: 20,
  },

  h1: {
    fontSize: 24,
    fontWeight: "bold",
  },

  p1: {
    fontSize: 18,
    marginBottom: 250,
  },

  p2: {
    fontSize: 18,
    marginTop: 50,
    fontWeight: "bold",
    color: "#FF9C64",
    marginBottom: 55,
  },

  p4: {
    fontSize: 12,
    marginTop: 10,
    marginLeft: 210,
  },

  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    height: 60,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  p3: {
    fontSize: 12,
    marginTop: 10,
    color: "#FF9C64",
    marginBottom: 150,
  },

  pose: {
    width: 341,
    height: 160,
    borderRadius: 16,
    marginTop: 20,
  },

  box: {
    width: 108,
    height: 72,
    borderRadius: 16,
    backgroundColor: "#FFE9AF",
    alignItems: "center",
    justifyContent: "center",
  },

  h4: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 40,
    marginLeft: -110,
  },

  oefeningen: {
    flexDirection: "row",
    gap: 25,
    width: 340,
    marginTop: 20,
  },

  posepic: {
    width: 60,
    height: 60,
    borderRadius: 20,
  },

  boxtext: {
    fontSize: 14,
  },

  posetext: {
    fontSize: 16,
    marginTop: 8,
  },

  posetext2: {
    fontSize: 14,
    color: "#7F7F7F",
  },
});

export default RoutineDetail;
