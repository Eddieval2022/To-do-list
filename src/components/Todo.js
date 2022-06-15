import { useState } from "react";

export function Todo({
  todo,
  deleteTodo,
  index,
  onClickEdit,
  input,
}) {
  const [done, setDone] = useState(false);
  // const [edit, setEdit] = usestate(false)
  return (
    <div>
      {done ? (
        <h1 style={{ color: "red", textDecoration: "wavy line-through black" }}>
          {todo}
        </h1>
      ) : (
        <h1>{todo}</h1>
      )}

      <button onClick={() => setDone(!done)}>Mark Done</button>
      <button onClick={() => deleteTodo(index)}>Remove</button>
      {/* <button
        onClick={() => {
          // setDone(!done);
          onClickEdit(input, todo);
        }}
      >
        Edit
      </button> */}
    </div>
  );
}
export default Todo;
