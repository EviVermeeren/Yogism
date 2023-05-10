import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";

const styles = StyleSheet.create({
  button: {
    width: 167,
    height: 167,
    borderRadius: 24,
    backgroundColor: "#F2F2F2",
    marginTop: 30,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginTop: 20,
    marginLeft: 30,
  },

  flex: {
    flexDirection: "column",
    marginTop: -40,
    marginLeft: 80,
  },

  name: {
    fontSize: 14,
    color: "#212121",
  },

  tijd: {
    fontSize: 10,
    color: "#7F7F7F",
  },

  flex2: {
    flexDirection: "row",
    marginTop: -40,
    marginLeft: 330,
    marginBottom: 20,
  },

  icons: {
    width: 25,
    height: 25,
    marginTop: 10,
  },

  desc: {
    fontSize: 14,
    color: "#212121",
    marginLeft: 30,
    marginRight: 30,
  },

  pic: {
    marginTop: 20,
    width: 400,
  },

  heart: {
    width: 16,
    height: 16,
    marginLeft: 50,
  },

  message: {
    width: 20,
    height: 20,
    marginLeft: 50,
  },

  text: {
    fontSize: 12,
    color: "#7F7F7F",
    marginLeft: 10,
  },

  like: {
    flexDirection: "row",
    marginBottom: 20,
    marginLeft: -10,
  },
});

function Post(props) {
  return (
    <View>
      <View>
        <View>
          <Image
            source={require("../media/avatar.jpg")}
            style={styles.avatar}
          />

          <View style={styles.flex}>
            <Text style={styles.name}>Evi Vermeêren</Text>
            <Text style={styles.tijd}>15 minuten geleden</Text>
          </View>

          <View style={styles.flex2}>
            <Image
              style={styles.icons}
              source={require("../media/share-ios.png")}
            />
            <Image style={styles.icons} source={require("../media/more.png")} />
          </View>

          <Text style={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Lorem ipsum dolor sit amet.
          </Text>
        </View>
      </View>

      <View>
        <Image
          source={require("../media/ochtedHarmonie.png")}
          style={styles.pic}
          resizeMode="contain"
        />
      </View>

      <View style={styles.like}>
        <Image
          source={require("../media/heart.png")}
          style={styles.heart}
          resizeMode="contain"
        />
        <Text style={styles.text}>1248</Text>
        <Image
          source={require("../media/message.png")}
          style={styles.message}
        />
        <Text style={styles.text}>122</Text>
      </View>
    </View>
  );
}

export default Post;
