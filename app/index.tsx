import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TodoTable from "@/components/TodoTable";

export default function index() {
  return (
    <SafeAreaView>
      <TodoTable />
    </SafeAreaView>
  );
}
