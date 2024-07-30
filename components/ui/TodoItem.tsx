import { View, Text } from "react-native";
import React from "react";

export default function TodoItem({ title, content }: Todo) {
  return (
    <View className="flex flex-row my-1">
      <Text className="w-1/3 text-center">{title}</Text>
      <Text className="w-2/3 text-center">{content}</Text>
    </View>
  );
}
