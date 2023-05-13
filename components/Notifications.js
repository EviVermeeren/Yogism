import React from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";

const Notifications = ({ text, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.notificationContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={styles.notificationImage}
            source={require("../media/notificatieFoto.png")}
          />
          <Text style={styles.notificationText}>{text}</Text>
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
});

export default Notifications;
