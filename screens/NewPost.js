import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
  Text,
  ScrollView,
} from "react-native";
import Post from "../components/Post.js";
import Line from "../components/Line.js";

const NewPost = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image
              style={styles.logo}
              source={require("../media/back.png")}
              resizeMode="contain"
            />
          </TouchableWithoutFeedback>
          <Text style={styles.h1}>Maak een post</Text>

          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate("Share");
            }}
          >
            <Text style={styles.post}>Posten</Text>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.flex}>
          <Image
            source={require("../media/avatar.jpg")}
            style={styles.avatar}
          />

          <Text style={styles.name}>Evi Vermeêren</Text>
        </View>

        <View style={styles.search}>
          <Text style={styles.texts}>Geef een beschrijving ...</Text>
        </View>

        <View style={styles.imgupload}>
          <Image
            style={styles.icons}
            source={require("../media/addcircle.png")}
          />
        </View>

        <View style={styles.flexbox}>
          <Text style={styles.text}>Wie kan deze post zien?</Text>
          <Text style={styles.border}>Iedereen ↓</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 70,
    marginTop: 50,
  },

  icon: {
    width: 20,
    height: 20,
  },

  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 340,
    marginTop: 20,
  },

  h1: {
    fontSize: 20,
    fontWeight: "bold",
  },

  post: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FF7F00",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginTop: 20,
  },

  flex: {
    flexDirection: "row",
    marginLeft: -190,
  },

  name: {
    fontSize: 14,
    color: "#212121",
    marginTop: 30,
    marginLeft: 10,
  },

  texts: {
    color: "#7F7F7F",
    fontSize: 12,
    marginLeft: -170,
  },

  search: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    gap: 160,
    width: 350,
    height: 40,
    borderRadius: 24,
    backgroundColor: "#F2F2F2",
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  imgupload: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 160,
    width: 350,
    height: 160,
    borderRadius: 24,
    backgroundColor: "#F2F2F2",
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  icons: {
    width: 40,
    height: 40,
  },

  text: {
    fontSize: 14,
    color: "#212121",
  },

  flexbox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 90,
    width: 350,
    marginBottom: 20,
  },

  border: {
    fontSize: 14,
    color: "#FF7F00",
    borderWidth: 1,
    borderColor: "#FF7F00",
    borderRadius: 24,
    paddingHorizontal: 15,
    paddingVertical: 2,
  },
});

export default NewPost;
