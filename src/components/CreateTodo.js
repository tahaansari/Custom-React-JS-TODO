import { useState } from "react"

export default function CreateTodo() {

  const [todo,setTodo] = useState("")

  const addTodo = ()=>{
    alert("add todo called",todo)

  }

  return (
    <div>
      <div className="d-flex ">
        <input type="text" value="" onChange={setTodo(todo)} className="form-control" placeholder="Enter Something"/>
        <button type="button" onClick={addTodo} className="btn btn-success">Add</button>
      </div>
    </div>
  )
}