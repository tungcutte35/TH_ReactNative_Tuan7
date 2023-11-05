import React, { useEffect, useState } from "react";
import { Pressable } from "react-native";
import { TextInput } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";
const data = [];

const Todos = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://653f80089e8bd3be29e0b38d.mockapi.io/todo")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Image
            style={styles.img1}
            source={require("../assets/btnBack.svg")}
          />
        </Pressable>
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
      <View style={styles.viewTodos}>
        {data.map((item) => (
          <View key={item.id}>
            <Image
              style={styles.img5}
              source={require("../assets/checkbox.svg")}
            ></Image>
            <Text>{item.todoName}</Text>
            <Pressable>
              <Image
                style={styles.img5}
                source={require("../assets/checkbox.svg")}
              ></Image>
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  img5: {
    width: 50,
    height: 50,
  },
  text1: {
    fontSize: 16,
    fontWeight: 700,
  },
  text2: {
    fontSize: 14,
    color: "#888",
  },
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
    gap: 10,
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
    borderRadius: 8,
  },
});
export default Todos;
