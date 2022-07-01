import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({title, id, status}) => {
  return (
    <div>
        <TodoItem  id={id} title={title} status={status}/>
    </div>
  )
}

export default TodoList