import React, { useEffect, useState } from "react";
import { Pressable } from "react-native";
import { TextInput } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";
const data = [];

const Todos = ({ navigation, route }) => {
  const [data, setData] = useState([]);
  const [change, setchange] = useState(0);
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editingTodoName, setEditingTodoName] = useState("");
  const handleUpdateTodo = (newTodo) => {
    setData((data) => [...data, newTodo]);
  };
  useEffect(() => {
    fetch("https://653f80089e8bd3be29e0b38d.mockapi.io/todo")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  const handleEditClick = (itemId, currentName) => {
    setEditingTodoId(itemId);
    setEditingTodoName(currentName);
  };

  const handleSaveClick = (itemId) => {
    // Gửi yêu cầu PUT đến API để cập nhật tên todo
    fetch(`https://653f80089e8bd3be29e0b38d.mockapi.io/todo/${itemId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todoName: editingTodoName,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        // Cập nhật danh sách todo sau khi cập nhật thành công
        setData((prevData) =>
          prevData.map((todo) => {
            if (todo.id === itemId) {
              todo.todoName = editingTodoName;
            }
            return todo;
          })
        );

        // Ẩn ô input và đặt lại giá trị trạng thái
        setEditingTodoId(null);
        setEditingTodoName("");
      });
  };
  useEffect(() => {
    if (route.params?.newTodo) {
      const newTodoData = route.params.newTodo;
      // Thêm dữ liệu todo mới vào danh sách todos hiện tại
      setData((prevData) => [...prevData, newTodoData]);
    }
  }, [route.params?.newTodo]);

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
          <View key={item.id} style={styles.viewbox1}>
            <View style={styles.viewbox5}>
              <Pressable
                onPress={() => {
                  fetch(
                    `https://653f80089e8bd3be29e0b38d.mockapi.io/todo/${item.id}`,
                    {
                      method: "DELETE",
                    }
                  ).then(() => {
                    setData(data.filter((todo) => todo.id !== item.id));
                  });
                }}
              >
                <Image
                  style={styles.img5}
                  source={require("../assets/checkbox.svg")}
                ></Image>
              </Pressable>
              <View style={styles.viewbox6}>
                {editingTodoId === item.id ? (
                  <>
                    <TextInput
                      style={styles.text7}
                      value={editingTodoName}
                      onChangeText={(text) => setEditingTodoName(text)}
                      autoFocus
                      onBlur={() => handleSaveClick(item.id)}
                      onSubmitEditing={() => handleSaveClick(item.id)}
                    />
                    <Pressable onPress={() => handleSaveClick(item.id)}>
                      <Text>Done</Text>
                    </Pressable>
                  </>
                ) : (
                  <>
                    <Text style={styles.text7}>{item.todoName}</Text>
                    <Pressable
                      onPress={() => handleEditClick(item.id, item.todoName)}
                    >
                      <Image
                        style={styles.img5}
                        source={require("../assets/update.svg")}
                      ></Image>
                    </Pressable>
                  </>
                )}
              </View>
            </View>
          </View>
        ))}
      </View>
      <Pressable
        style={styles.btn}
        onPress={() =>
          navigation.navigate({
            name: "AddToDos",
            params: {
              data: data,
              handleUpdateTodo: handleUpdateTodo,
            },
          })
        }
      >
        <Image
          style={styles.img6}
          source={require("../assets/cong.svg")}
        ></Image>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  img6: { width: 40, height: 40 },
  btn: {
    borderRadius: "50%",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "blue",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  viewbox5: { flexDirection: "row", alignItems: "center", gap: 20 },
  viewbox6: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    width: 290,
  },
  viewbox1: {
    flexDirection: "row",
    gap: 50,
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: "#ccc",
    borderRadius: 15,
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  text7: {
    fontSize: 18,
    fontWeight: 700,
  },
  img5: {
    width: 40,
    height: 40,
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
