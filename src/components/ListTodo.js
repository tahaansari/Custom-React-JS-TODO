export default function ListTodo({todos,deleteTodo}) {
  return (
    <div>
      <ul className="list-group">
        {todos.map((todo,index)=>{
          return(
            <li key={index} className="list-group-item">
              {todo}
              <button type="button" onClick={()=>deleteTodo(index)} className="btn-close float-end" aria-label="Close"></button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}