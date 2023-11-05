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
});
export default Todos;
