import { useState } from "react";

export function Todo({ todo, deleteTodo, index }) {
  const [done, setDone] = useState(false);

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

    </div>
  );
}


