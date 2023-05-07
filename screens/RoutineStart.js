import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

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
      </View>

      <Image style={styles.video} source={require("../media/pose.png")} />

      <Text style={styles.h4}>Child's Pose</Text>
      <Text style={styles.h5}>2 min</Text>
      <Text style={styles.p1}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
        mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
        tellus.
      </Text>

      <Image
        style={styles.sound}
        source={require("../media/sound.png")}
        resizeMode="contain"
      />

      <View style={styles.icons}>
        <Image
          style={styles.icons}
          source={require("../media/previous.png")}
          resizeMode="contain"
        />
        <Image
          style={styles.icons}
          source={require("../media/pauze.png")}
          resizeMode="contain"
        />
        <Image
          style={styles.icons}
          source={require("../media/next.png")}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.p2}>00:03</Text>

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
    marginTop: 70,
    marginLeft: -330,
    zIndex: 1,
  },

  video: {
    width: 380,
    height: 200,
    borderRadius: 16,
    zIndex: -1,
  },

  icon: {
    width: 20,
    height: 20,
  },

  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 40,
    marginTop: 20,
  },

  h1: {
    fontSize: 24,
    fontWeight: "bold",
  },

  p1: {
    fontSize: 16,
    marginBottom: 250,
    marginLeft: 18,
    marginTop: 15,
  },

  p2: {
    fontSize: 22,
    marginTop: 50,
    fontWeight: "bold",
    color: "#FF9C64",
    marginBottom: 140,
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
    width: 340,
    height: 200,
    borderRadius: 16,
    marginTop: 20,
  },

  box: {
    width: 90,
    height: 60,
    borderRadius: 16,
    backgroundColor: "#E9FFD2",
    alignItems: "center",
    justifyContent: "center",
  },

  h4: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 40,
    marginLeft: -260,
  },

  h5: {
    fontSize: 16,
    marginLeft: -320,
  },

  oefeningen: {
    flexDirection: "row",
    gap: 25,
    width: 340,
    marginTop: 20,
  },

  posepic: {
    width: 30,
    height: 30,
    borderRadius: 16,
    marginTop: 5,
  },

  sound: {
    width: 300,
    height: 80,
    marginTop: -200,
  },
});

export default RoutineDetail;
