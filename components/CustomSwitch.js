import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

const CustomSwitch = ({ labelText }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.NotificationSettings}>
      <Text style={styles.text}>{labelText}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "white" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  NotificationSettings: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
    top: -50,
    left: 0,
  },
  text: {
    fontSize: 18,
    paddingRight: 100,
  },
});

export default CustomSwitch;
