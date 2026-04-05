import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos , deleteTodo, toggleComplete }) => {
  return (
    <div className="">
      {
      todos.map((item) => (
        <TodoItem key={item.id} id={item.id} task={item.text} deleteTodo={deleteTodo} toggleComplete={toggleComplete} completed={item.completed} />
      ))
      }
    </div>
  );
};

export default TodoList;
