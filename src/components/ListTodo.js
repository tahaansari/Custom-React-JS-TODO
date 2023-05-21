import { useState } from "react";


function ListTodo() {

  const [list,setList] = useState("");  

  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          An item
          <button type="button" className="btn-close float-end" aria-label="Close"></button>
        </li>
      </ul>
    </div>
  )
}

export default ListTodo;
