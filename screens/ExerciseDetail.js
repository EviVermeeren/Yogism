import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

const ExerciseDetail = ({ navigation }) => {
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
        <Text style={styles.h1}>Child's Pose</Text>

        <TouchableWithoutFeedback
          onPress={() => {
            // navigation.navigate("Love");
          }}
        >
          <Image
            style={styles.logo}
            source={require("../media/love.png")}
            resizeMode="contain"
          />
        </TouchableWithoutFeedback>
      </View>

      <Image
        style={styles.pose}
        source={require("../media/posess.png")}
        resizeMode="cover"
      ></Image>

      <Text style={styles.h4}>Hoe werkt het?</Text>

      <View style={styles.oefeningen}>
        <View style={styles.numberbox}>
          <Text style={styles.number}>1</Text>
        </View>
        <Text style={styles.explanation}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna.
        </Text>
      </View>

      <View style={styles.oefeningen}>
        <View style={styles.numberbox}>
          <Text style={styles.number}>2</Text>
        </View>
        <Text style={styles.explanation}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna.
        </Text>
      </View>

      <View style={styles.oefeningen2}>
        <View style={styles.numberbox}>
          <Text style={styles.number}>3</Text>
        </View>
        <Text style={styles.explanation}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna.
        </Text>
      </View>

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
    marginTop: 70,
    gap: 70,
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
    height: 192,
    borderRadius: 16,
    marginTop: 24,
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
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: -200,
  },

  oefeningen: {
    flexDirection: "row",
    gap: 15,
    width: 340,
    marginTop: 20,
    marginRight: 20,
  },

  oefeningen2: {
    flexDirection: "row",
    gap: 15,
    width: 340,
    marginTop: 20,
    marginRight: 20,
    marginBottom: 350,
  },

  posepic: {
    width: 30,
    height: 30,
    borderRadius: 16,
    marginTop: 5,
  },

  number: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#7F7F7F",
  },

  numberbox: {
    width: 44,
    height: 44,
    borderRadius: 16,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "center",
  },

  explanation: {
    fontSize: 16,
    color: "#212121",
    width: 290,
    lineHeight: 24,
  },
});

export default ExerciseDetail;
