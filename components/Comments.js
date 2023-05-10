import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";

function Comments(props) {
  return (
    <View>
      <Text style={styles.comment}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.descr}>{props.descr}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  comment: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: "#F2F2F2",
    borderRadius: 24,
    padding: 20,
    width: 350,
  },

  name: {
    fontSize: 14,
    color: "#212121",
    fontWeight: "bold",
  },

  descr: {
    fontSize: 14,
    color: "#212121",
  },
});

export default Comments;
