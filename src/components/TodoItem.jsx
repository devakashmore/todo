import React from 'react'

const TodoItem = ({ id,task , deleteTodo, toggleComplete ,completed}) => {
  return (
    <div className="todo-item flex justify-between gap-10 items-center mt-5 border-2 rounded-xl px-5 py-3 bg-indigo-400" >
      {/* Clicking the text triggers the toggle */}
      <span className='p-3 text-2xl rounded-lg text-white cursor-pointer  capitalize'
        onClick={() => toggleComplete(id)}
        style={{ 
          textDecoration: completed ? "line-through" : "none",
          cursor: "pointer" 
        }}
      >
            {task}
      </span>

      <button onClick={() =>(deleteTodo(id))} className='bg-red-700 p-3 text-xl rounded-lg text-white cursor-pointer hover:bg-red-400 capitalize'>delete </button>
    </div>
  )
}

export default TodoItem