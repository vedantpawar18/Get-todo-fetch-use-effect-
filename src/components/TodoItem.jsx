import React from 'react'

const TodoItem = ({title, id, status}) => {
  return (
    <div>
        <div style={{display:"flex", gap:"1rem"}}>
                    <div>{id}</div>
                    <div>{title}</div>
                    <div>{status ? "Done": "Not DOne"}</div>
                </div>
    </div>
  )
}

export default TodoItem