import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TodoTable from "@/components/TodoTable";
import TodoForm from "@/components/TodoForm";

export default function index() {
  return (
    <SafeAreaView>
      <TodoForm />
      <TodoTable />
    </SafeAreaView>
  );
}
