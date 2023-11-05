import React, { useRef, useState } from "react";
import { Pressable, Text } from "react-native";
import { Image, StyleSheet, View } from "react-native";
import { TextInput } from "react-native";

const AddToDos = ({ navigation, route, handleAdd }) => {
  const [job, setJob] = useState("");
  const handleAdd = () => {
    setJob(jobInput.current.value);

    // Navigate back to the Todos page
    navigation.goBack();

    // Pass the job data to the handleAdd prop
    handleAdd(job);
  };
  useEffect(() => {
    setData((prevData) => [...prevData, route.params?.job]);

    setJob(route.params?.job);
  }, [route.params?.job]);
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Pressable onPress={() => navigation.navigate("Todos")}>
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
      <View style={styles.view2}>
        <Text style={styles.text3}>ADD YOUR JOB</Text>
      </View>
      <View style={styles.viewInput}>
        <TextInput
          value={job}
          onChangeText={setJob}
          placeholder="Input your job"
          style={styles.input}
        />
        <Image style={styles.img3} source={require("../assets/sk.svg")} />
      </View>
      <View style={styles.view4}>
        <Pressable style={styles.btn}>
          <Text style={styles.text4}>FISNISH</Text>
        </Pressable>
      </View>
      <View style={styles.img} onPress={handleAdd}>
        <Image style={styles.img} source={require("../assets/img.png")} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  img: {
    marginBottom: 42,
    width: 271,
    height: 271,
  },
  view4: {
    marginBottom: 50,
  },
  btn: {
    width: 190,
    height: 44,
    backgroundColor: "#00BDD6",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text4: {
    color: "#fff",
    fontSize: 16,
  },
  img3: {
    width: 30,
    height: 30,
    position: "absolute",
    top: 5,
    left: 10,
  },

  viewInput: {
    marginHorizontal: 27,
    marginBottom: 60,
    marginBottom: 60,
  },
  input: {
    paddingLeft: 44,
    paddingRight: 166,
    borderWidth: 1,

    paddingTop: 8,
    paddingBottom: 9,
    border: "1px solid #ccc",
    color: "#ccc",
    width: 334,
    borderRadius: 8,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  text1: {
    fontSize: 16,
    fontWeight: 700,
  },
  text2: {
    fontSize: 14,
    color: "#888",
  },
  img2: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  view1: {
    flexDirection: "row",
    marginBottom: 30,
    gap: 140,
  },
  img1: {
    width: 36,
    height: 36,
    marginTop: 20,
  },
  viewbox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    gap: 10,
  },
  text3: {
    fontSize: 30,
    fontWeight: 700,
    color: "#171A1F",
    marginBottom: 50,
  },
});
export default AddToDos;
