import React from "react";
import { Image, Text, View } from "react-native";

const Todos = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img1} source={require("../assets/btnBack.svg")} />
      <View style={styles.view1}>
        <Image style={styles.img2} source={require("../assets/avt.png")} />
        <View style={styles.vText}>
          <Text style={styles.text1}>Hi Twinkle</Text>
          <Text style={styles.text2}>Have agrate day a head</Text>
        </View>
      </View>
      <View style={styles.viewInput}>
        <TextInput placeholder="Search" style={styles.input} />
        <Image style={styles.img3} source={require("../assets/search.svg")} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  img1: {
    width: 20,
    height: 20,
    position: "absolute",
    top: 9,
    left: 15,
  },
  text: {
    fontSize: 24,
    color: "rgba(131, 83, 226, 1)",
    fontWeight: 700,
    maxWidth: 200,
    textAlign: "center",
    marginBottom: 60,
  },
  viewInput: {
    marginHorizontal: 27,
    marginBottom: 60,
  },
  input: {
    paddingLeft: 44,
    paddingRight: 166,
    paddingTop: 8,
    paddingBottom: 9,
    border: "1px solid #ccc",
    color: "#ccc",
    width: 334,
  },
});
export default Todos;
