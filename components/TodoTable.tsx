import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { data } from "@/constants/data";
import TodoItem from "./ui/TodoItem";
import { API_URL } from "@/constants/urls";

export default function TodoTable() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Todo[]>([]);
  const getTodos = async () => {
    try {
      const response = await fetch(`${API_URL}/api/todos`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getTodos();
  }, [data]);
  return (
    <>
      <View className="flex flex-row py-2 border-b-2 border-t-2 border-b-gray-400 mx-2">
        <Text className=" w-2/6 p-2 text-center font-bold text-lg">Title</Text>
        <Text className=" w-3/6 p-2 text-center font-bold text-lg">
          Content
        </Text>
      </View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TodoItem id={item.id} title={item.title} content={item.content} />
          )}
          keyExtractor={(item) => item.id!.toString()}
        />
      )}
    </>
  );
}
