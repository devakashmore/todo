import React, { useState } from "react";

const TodoForm = ({ addTodos }) => {
  const [value, setValue] = useState("");
  
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodos(value);
    setValue("");
  };
  return (
    <div>
      <form action="" onSubmit={HandleSubmit}>
        <input
          type="text"
          name=""
          id=""
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
