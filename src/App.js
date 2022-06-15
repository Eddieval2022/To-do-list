import React, { useState } from "react";
import "./App.css";
import { Todo } from "./components/Todo";

//
// id: number
// text: 'string'

// const x = {
//   id: 1,
//   text: "this is the todo",
// };

const App = () => {
  // const [todos, setTodos] = useState([])
  const [todos, addTodo] = useState([]);

  const [input, setInput] = useState("");
  // const [edit, setEdit] = useState([]);

  // const [itemTitle, setItemTitle] = useState("");
  // const [currentId, setCurrentId] = useState("");

  const submitTask = () => {
    addTodo([...todos, input]);
    setInput("");
  };

  const deleteTodo = (index) => {
    console.log("delete", index);
    let savedTask = [...todos];
    savedTask.splice(index, 1);
    addTodo(savedTask);
  };

  const KeyDown = (event) => {
    if (event.key === "Enter") {
      addTodo([...todos, input]);
      setInput("");
    }
  };

  // to update todo
  // replace the todos array index
  // with updated string

  // const onClickEdit = (edit, task) => {
  //   // e or index
  //   console.log("onClickEdit", todos, edit, task);
  //   console.log("old", todos[edit]);
  //   // mutate state
  //   let setEdits =  [...todos]
  //   setEdits.splice(edit,1
  //   );// set to new input
  //   console.log("new", todos[edit]);
  //   addTodo([...todos, edit]);
  //   setEdit("");
  // };

  // const onEditInput = (e, task) => {
  //   // e or index
  //   console.log("onEditInput", todos, e, task);

  //   // let newTask = [...todo];
  //   // const updatedTodo = [...todo]
  //   // newTask.addTodo([e.target.value]);
  //   // setCurrentId(id);
  // };
  // const editTodo = e => {
  //   setInput(e.target.value);
  // };

  return (
    <div className="App">
      <h1>To-do list</h1>
      <input
        type="text"
        value={input}
        placeholder="Enter note"
        onKeyDown={KeyDown}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      /> 
      <button onClick={submitTask}>Add</button>
      {todos.map((todo, index) => (
        <div key={index}>
          <Todo
            key={index}
            index={index}
            todo={todo}
            // onClickEdit={onClickEdit}
            deleteTodo={deleteTodo}
          />
          {/* <input type = "text"value={edit} onChange={(edit) => onClickEdit()} /> */}
        </div>
      ))}
      {
        // <input
        //   key={todo.id}
        //   value={todo.id === setInput ? input : todo.newTask}
        //   onChange={(e) => handleChange(e, todo)}
        // />
      }
    </div>
  );
};

export default App;
