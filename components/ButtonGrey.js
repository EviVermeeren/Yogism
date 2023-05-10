import { StyleSheet, TouchableOpacity, Text } from "react-native";

const styles = StyleSheet.create({
  button: {
    width: 342,
    height: 60,
    borderRadius: 24,
    borderColor: "#7F7F7F",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  buttonText: {
    fontSize: 16,
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
