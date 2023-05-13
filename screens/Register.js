import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import CustomButtonYellow2 from "../components/ButtonYellow2.js";

const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Welkom</Text>
      <Text style={styles.p1}>Maak een account aan</Text>

      <View style={styles.icons}>
        <Image
          style={styles.icon}
          source={require("../media/fb.webp")}
          resizeMode="contain"
        />
        <Image
          style={styles.icon}
          source={require("../media/google.webp")}
          resizeMode="contain"
        />
        <Image
          style={styles.icon}
          source={require("../media/apple.webp")}
          resizeMode="contain"
        />
      </View>

      <View style={styles.of}>
        <View style={styles.line} />
        <Text style={styles.p2}>OF</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
        />

        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          placeholder="Wachtwoord"
        />

        <TextInput
          style={styles.input}
          onChangeText={(text) => setRepeatPassword(text)}
          placeholder="Herhaal wachtwoord"
        />

        <CustomButtonYellow2
          title="Registreer"
          onPress={() => {
            navigation.navigate("Home");
          }}
          disabled={false}
        />
      </View>

      <View style={styles.already}>
        <Text style={styles.p3}>Ik heb reeds een account. </Text>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.link}>Inloggen</Text>
        </TouchableWithoutFeedback>
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

  icon: {
    width: 50,
    height: 50,
  },

  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200,
    marginTop: 50,
  },

  h1: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 200,
  },

  p1: {
    fontSize: 16,
    color: "#7F7F7F",
  },

  p2: {
    fontSize: 16,
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
    borderRadius: 24,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  p3: {
    fontSize: 14,
    marginTop: 10,
    color: "#7F7F7F",
    marginBottom: 150,
  },

  of: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  line: {
    flex: 1,
    height: 2,
    backgroundColor: "#F2F2F2",
    marginHorizontal: 10,
  },

  already: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  link: {
    fontSize: 14,
    marginTop: 10,
    color: "#FF9C64",
    marginBottom: 150,
    fontWeight: "bold",
  },
});

export default Register;
