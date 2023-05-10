import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Follow(props) {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.flex}>
        <Image style={styles.img} source={require("../media/avatar.jpg")} />
        <Text style={styles.name}>Evi Vermeêren</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: -170,
  },

  flex: {
    flexDirection: "row",
  },
});

export default Follow;
