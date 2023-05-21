import { useState } from "react";

function ListTodo() {

  const [todos,setTodos] = useState([])

  const deleteTodo = ()=>{
    alert('delete todo called')
  }

  return (
    <div>
      <ul className="list-group">
        {todos.map((todo,index)=>{
          return(
            <li key={index} className="list-group-item">
              {todo}
              <button type="button" onClick={deleteTodo} className="btn-close float-end" aria-label="Close"></button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ListTodo;
