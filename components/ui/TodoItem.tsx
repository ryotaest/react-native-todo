import { View, Text, TouchableHighlight } from "react-native";
import React from "react";
import { API_URL } from "@/constants/urls";

export default function TodoItem({ id, title, content }: Todo) {
  const deleteTodo = async (id: number) => {
    try {
      await fetch(`${API_URL}/api/todos/${id}`, {
        method: "DELETE",
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
    <View className="flex flex-row my-1 items-center">
      <Text className="w-2/6 text-center">{title}</Text>
      <Text className="w-3/6 text-center">{content}</Text>
      <TouchableHighlight
        onPress={() => deleteTodo(id!)}
        activeOpacity={0.5}
        underlayColor="gray"
        className="bg-red-500 rounded-md w-1/6"
      >
        <Text className="p-1 text-center text-white font-bold">Delete</Text>
      </TouchableHighlight>
    </View>
  );
}
