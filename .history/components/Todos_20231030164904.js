import React from "react";
import { Image, View } from "react-native";

const Todos = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../assets/btnBack.svg")} />
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
