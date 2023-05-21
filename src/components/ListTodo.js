export default function ListTodo({todos,deleteTodo}) {
  if(todos.length > 0){
    console.log(todos)
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
  }else{
    console.log('no')
    return (
      <div>
        <h2>No Todo</h2>
      </div>
    )
  }

}