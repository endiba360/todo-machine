import React, { useState } from "react";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";

const taskList = [
  { key: 1, text: "Put gas on the yellow car", completed: false },
  { key: 2, text: "Buy eggs from the store", completed: false },
  { key: 3, text: "Send email to University", completed: true },
  { key: 4, text: "Feed the ducks", completed: true },
];

function App() {
  const [todos, setTodos] = useState(taskList);
  const [searchValue, setSearchValue] = useState("");

  const taskCompleted = todos.filter((task) => !!task.completed).length;
  const totalTasks = todos.length;
  const searchedTask = todos.filter((task) => {
    return task.text.toLowerCase().includes(searchValue.toLocaleLowerCase());
  });

  const completeTodo = (key) => {
    const listOfTasks = [...todos];
    const indexOfTask = listOfTasks.findIndex((e) => e.key == key);
    if (indexOfTask !== -1) listOfTasks[indexOfTask].completed = true;
    setTodos(listOfTasks);
  };

  return (
    <>
      <TodoCounter completed={taskCompleted} total={totalTasks} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTask.map((e) => (
          <TodoItem
            key={e.key}
            text={e.text}
            completed={e.completed}
            onComplete={() => {
              completeTodo(e.key);
            }}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
