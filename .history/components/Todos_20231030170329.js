import React from "react";
import { TextInput } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";

const Todos = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image style={styles.img1} source={require("../assets/btnBack.svg")} />
        <View style={styles.viewbox}>
          <Image style={styles.img2} source={require("../assets/avt.png")} />

          <View style={styles.vText}>
            <Text style={styles.text1}>Hi Twinkle</Text>
            <Text style={styles.text2}>Have agrate day a head</Text>
          </View>
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
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  view1: {
    flexDirection: "row",
    marginBottom: 30,
    gap: 140,
  },
  viewbox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  img1: {
    width: 36,
    height: 36,
    marginTop: 20,
  },
  img2: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  img3: {
    width: 20,
    height: 20,
    position: "absolute",
    top: 9,
    left: 15,
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
