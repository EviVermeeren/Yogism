import { StyleSheet, TouchableOpacity, Text } from "react-native";

const styles = StyleSheet.create({
  button: {
    width: 342,
    height: 60,
    borderRadius: 24,
    backgroundColor: "#FF9C64",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 80,
  },
  buttonText: {
    fontSize: 16,
    color: "#FFFFFF",
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
