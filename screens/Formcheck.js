import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";

const Formcheck = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
    marginTop: 1,
    marginLeft: 210,
    color: "#7F7F7F",
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
    height: 1,
    backgroundColor: "#7F7F7F",
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

export default Formcheck;
