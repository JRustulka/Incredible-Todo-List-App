import { Text, View } from "react-native";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

export default function Index() {
  return (
    <View>
      <ToDoList></ToDoList>
      <ToDoForm></ToDoForm>
    </View>
  );
}
