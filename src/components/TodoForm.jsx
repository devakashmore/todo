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
    <div className=" p-3">
      <form action="" onSubmit={HandleSubmit}>
        <div className="flex gap-3 w-full">
          <input
          type="text"
          name=""
          id=""
          placeholder="Add Task"
          className=" w-full px-6 py-3 border-2 rounded-lg outline-0 font-bold  text-3xl"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className=" w-64 rounded-2xl capitalize font-semibold cursor-pointer bg-amber-50 text-black border-none hover:bg-yellow-400 hover:text-white text-2xl ">Add Task</button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
