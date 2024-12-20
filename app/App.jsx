/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';

import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

const [tasks, setTasks] = useState(
[
  'Do laundry',
  'Go to gym',
  'Walk dog'
]
)


function App() {
  return (
    <SafeAreaView>
      <ToDoList></ToDoList>
<<<<<<< Updated upstream
      <ToDoForm></ToDoForm>
      <ToDoList tasks={tasks} />
=======
      <ToDoForm addTask={addTask}></ToDoForm>
>>>>>>> Stashed changes
    </SafeAreaView>
  );
}

// const addTask = (task) => {
//   //add here
// };

const addTask = (taskText) => {
  setTasks([...tasks, taskText]);
};

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default App;
