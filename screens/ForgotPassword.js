import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import CustomButtonYellow2 from "../components/ButtonYellow2.js";
import CustomButtonGrey from "../components/ButtonGrey.js";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Wachtwoord vergeten</Text>
      <Text style={styles.p1}>
        Voer je e-mailadres in, zodat we je een herstelcode kunnen sturen.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
        />

        <CustomButtonYellow2
          title="Verzenden"
          onPress={() => {
            navigation.navigate("ResetPassword");
          }}
          disabled={false}
        />

        <CustomButtonGrey
          title="Annuleren"
          onPress={() => {
            navigation.navigate("Login");
          }}
          disabled={false}
        />
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
    marginBottom: 270,
    textAlign: "center",
    width: 270,
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
    borderRadius: 24,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  p3: {
    fontSize: 12,
    marginTop: 10,
    color: "#FF9C64",
    marginBottom: 150,
  },

  of: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#7F7F7F",
    marginHorizontal: 10,
  },

  form: {
    marginBottom: 50,
  },
});

export default Login;
