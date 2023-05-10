import { StyleSheet, TouchableOpacity, Text } from "react-native";

const styles = StyleSheet.create({
  button: {
    width: 167,
    height: 167,
    borderRadius: 24,
    backgroundColor: "#F2F2F2",
    marginTop: 30,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#212121",
    marginLeft: 20,
  },
  smalltext: {
    fontSize: 14,
    color: "#212121",
    marginTop: 100,
    marginLeft: 20,
  },
});

function Vakje(props) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.smalltext}>{props.small}</Text>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
}

export default Vakje;
