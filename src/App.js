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
  const [searchValue, setSearchValue] = useState("");
  console.log("This is the search value: " + searchValue);

  return (
    <>
      <TodoCounter completed={5} total={10} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {taskList.map((e) => (
          <TodoItem key={e.key} text={e.text} completed={e.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
