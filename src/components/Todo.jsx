import React, { useEffect, useState } from 'react'
import TodoList from './TodoList';

const Todo = () => {
    const [data, setData] =useState ([]);
    const [page, setPage] = useState (1);

    const getTodos = async () => {
        try {
            let data= await fetch (`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`)
            data = await data.json();
            console.log(data);
            setData(data);
        }
        catch (err){
            console.log(err)
        }
    }

    useEffect ( () => {
        getTodos();
    }, [page])

  return (
    <div>
        <h1>Todo App</h1>
        <button onClick={getTodos}>Fetch</button>

        <div>
            {
                data.map(todo =>
                    <TodoList key={todo.id} id={todo.id} title={todo.title} status={todo.status} /> 
                    )
            }
           
        </div>

        <div>
            <button disabled={page===1} onClick={() => setPage(page-1)}>Prev</button>
            <button onClick={() => setPage(page+1)}>Next</button>
        </div>
    </div>
  )
}

export default Todo