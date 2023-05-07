import { StyleSheet, TouchableOpacity, Text } from "react-native";

const styles = StyleSheet.create({
  button: {
    width: 342,
    height: 60,
    borderRadius: 24,
    backgroundColor: "white",
    borderColor: "#F2F2F2",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
  buttonText: {
    fontSize: 18,
    color: "#212121",
  },
});

function CustomButton(props) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
