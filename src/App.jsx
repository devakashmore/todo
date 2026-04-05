import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";

import TodoList from "./components/TodoList";
function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text: text, completed: false };
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id) => {
    const newTasks = todos.filter((todo) => todo.id !== id);
    setTodos(newTasks);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };
  return (
    <>
      <h2>Todo App </h2>
      <div className="">
        <TodoForm addTodos={addTodo} />

        <TodoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete}/>
      </div>
    </>
  );
}

export default App;
