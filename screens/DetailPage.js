import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SearchBar } from "@rneui/themed";
import DetailPost from "../components/DetailPost.js";
import Comments from "../components/Comments.js";

const Feed = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <DetailPost />
        <Comments
          name="Glenn Vinck  "
          descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Lorem ipsum dolor sit amet."
        />
        <Comments
          name="Brend Van den Eynde  "
          descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Lorem ipsum dolor sit amet."
        />
        <Comments
          name="Evi Vermeêren  "
          descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Lorem ipsum dolor sit amet."
        />
        <Comments
          name="Arne Samson  "
          descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Lorem ipsum dolor sit amet."
        />

        <View style={styles.search}>
          <Text style={styles.texts}>Schrijf een reactie ...</Text>
          <Image style={styles.icon} source={require("../media/send2.png")} />
        </View>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
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
    marginBottom: 20,
  },
  texts: {
    color: "#7F7F7F",
    fontSize: 14,
    marginLeft: 20,
  },
});

export default Feed;
