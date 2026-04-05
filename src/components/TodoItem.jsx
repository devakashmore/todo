import React from 'react'

const TodoItem = ({ id,task , deleteTodo, toggleComplete ,completed}) => {
  return (
    <div className="todo-item">
      {/* Clicking the text triggers the toggle */}
      <span
        onClick={() => toggleComplete(id)}
        style={{ 
          textDecoration: completed ? "line-through" : "none",
          cursor: "pointer" 
        }}
      >
            {task}
      </span>

      <button onClick={() =>(deleteTodo(id))}>delete </button>
    </div>
  )
}

export default TodoItem