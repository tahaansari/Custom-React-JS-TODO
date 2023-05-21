import { useState } from "react"

export default function CreateTodo({addTodo}) {
  const [todo,setTodo] = useState("")
  return (
    <div>
      <div className="d-flex">
        <input type="text" onChange={(e)=>setTodo(e.target.value)} className="form-control" placeholder="Enter Something"/>
        <button type="button" onClick={()=>addTodo(todo)} className="btn btn-success">Add</button>
      </div>
    </div>
  )
}