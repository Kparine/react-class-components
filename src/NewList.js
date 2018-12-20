import React from 'react'
import TodoItem from './TodoItem';

function NewList(props){
  return (
    <ul>
    {
      props.todos.map(todo => 
     <TodoItem 
     todo={todo}
      handleComplete={props.handleComplete}
      handleDelete={props.handleDelete} />
      )
    }
  </ul>

  )

}




export default NewList