import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import React from "react";
import "./App.css";

const taskList = [
  { key: 1, text: "Put gas on the yellow car", completed: false },
  { key: 2, text: "Buy eggs from the store", completed: false },
  { key: 3, text: "Send email to University", completed: true },
  { key: 4, text: "Feed the ducks", completed: true },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={5} total={10} />
      <TodoSearch />

      <TodoList>
        {taskList.map((e) => (
          <TodoItem key={e.key} text={e.text} completed={e.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
