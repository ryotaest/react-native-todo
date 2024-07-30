import { View, Text, TouchableHighlight, TextInput } from "react-native";
import React, { useState } from "react";
import { API_URL } from "@/constants/urls";

export default function TodoForm() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  console.log(title, content);
  const createTodos = async ({ title, content }: Todo) => {
    try {
      await fetch(`${API_URL}/api/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View className="space-y-2 mb-2">
      <TextInput
        placeholder="title"
        className="p-1 border-2 border-gray-300 rounded-md"
        onChangeText={setTitle}
        value={title}
      />
      <TextInput
        placeholder="content"
        className="p-1 border-2 border-gray-300 rounded-md"
        onChangeText={setContent}
        value={content}
      />
      <TouchableHighlight
        onPress={() => {
          if (!title || !content) return;
          createTodos({ title, content });
          setTitle("");
          setContent("");
        }}
        activeOpacity={0.5}
        underlayColor="gray"
        className="bg-black rounded-md"
      >
        <Text className="p-1 text-center text-white font-bold">Save</Text>
      </TouchableHighlight>
    </View>
  );
}
