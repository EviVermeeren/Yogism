import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import CustomSwitch from '../components/CustomSwitch';

const NotificationSettings = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.goBack();
          }}
        >
          <View style={styles.backButton}>
            <Image
              style={styles.logo}
              source={require("../media/back.png")}
              resizeMode="contain"
            />
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.h1}>Meldingen </Text>
      </View>

          <View>
          <CustomSwitch labelText="Nieuwe volgers" />
          <CustomSwitch labelText="Likes op jouw routines" />
          <CustomSwitch labelText="Likes op jouw posts" />
          <CustomSwitch labelText="Reacties op jouw routines" />
          <CustomSwitch labelText="Reacties op jouw posts" />
          <CustomSwitch labelText="Vermeldingen" />
          </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  header: {
    position: "absolute",
    top: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingTop: 30, // add padding top to prevent content from being hidden behind status bar
  },

  h1: {
    fontSize: 24,
    fontWeight: "bold",
    left: -20,
  },

  logo: {
    width: 50,
    height: 50,
    right: 95,
  },

  meldingen: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "5%",
    height: 400,
    marginTop: -270,
    gap: 10,
  },

////////////////////////////////////////////////////////////////////////////////////////////////////////////

  NotificationSettings: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
    label: {
      flex: 1,
      fontSize: 18,
    },

});

export default NotificationSettings;
