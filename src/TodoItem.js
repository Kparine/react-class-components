import React from 'react'

function TodoItem({todo, handleComplete, handleDelete}){
  return (
    <li 
    style={todo.completed ? { textDecoration: 'line-through' } : null } >
   <button onClick={()=> handleComplete(todo)}>Complete</button>
   <button onClick={()=> handleDelete(todo)}>Delete Me</button>
    {todo.description}
  </li>
  )



}


export default TodoItem