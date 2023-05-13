import React from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";

const Users = ({ text, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.notificationContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={styles.notificationImage}
            source={require("../media/notificatieFoto.png")}
          />
          <Text style={styles.notificationText}>{text}</Text>
          <Text style={styles.notificationText2}>Volgen</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  notificationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 35,
  },
  notificationImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
  },
  notificationText: {
    flex: 1,
    fontSize: 16,
  },
  notificationText2: {
    fontSize: 14,
    color: "#FF7A00",
    marginRight: 40,
    borderWidth: 1,
    borderColor: "#FF7A00",
    borderRadius: 24,
    padding: 5,
    paddingHorizontal: 20,
    marginTop: 5,
  },
});

export default Users;
