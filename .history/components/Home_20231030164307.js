import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Img } from "../assets/img.png";
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image style={styles.img} source={require("../assets/img.png")} />
      </View>
      <Text style={styles.text}> MANAGE YOUR TASK</Text>
      <View style={styles.viewInput}>
        <TextInput placeholder="Enter your name" style={styles.input} />
        <Image style={styles.img1} source={require("../assets/Frame.svg")} />
      </View>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("Todos")}
      >
        <Text style={styles.text1}>GET STARTED</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  img: {
    marginBottom: 42,
    width: 271,
    height: 271,
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
  btn: {
    backgroundColor: "rgba(0, 189, 214, 1)",
    paddingHorizontal: 30,
    paddingVertical: 9,
    borderRadius: 10,
  },
  text1: {
    color: "#fff",
    fontSize: 18,
  },
});
export default Home;
