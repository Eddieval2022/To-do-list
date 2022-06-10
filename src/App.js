import React, { useState } from "react";
import "./App.css";
import { Todo } from "./components/Todo";

// =============== APP =============== //

const App = () => {
  const [todo, addTodo] = useState([]);

  const [input, setInput] = useState("");

  const submitTask = (event) => {
    addTodo([...todo, input]);
    setInput("");
  };

  const deleteTodo = (index) => {
    let savedTask = [...todo];
    savedTask.splice(index, 1);
    addTodo(savedTask);
  };

  const KeyDown = (event) => {
    if (event.key === "Enter") {
      addTodo([...todo, input]);
      setInput("");
    }
  };
  return (
    <div className="App">
      <h1>To-do list</h1>
      <input
        type="text "
        value={input}
        placeholder="Enter note"
        onKeyDown={KeyDown}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <button onClick={submitTask}>Add</button>
      {todo.map((todo, index) => (
        <Todo key={todo} index={index} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};
export default App;
