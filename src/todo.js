import { useState } from 'react';
import CreateTodo from './components/todo/createTodo';
import ListTodo from './components/ListTodo';

export default function App() {
  const [todos,setTodos] = useState([])
  const addTodo = (todo) => {
    setTodos([...todos,todo]);
  }
  const deleteTodo = (key)=>{
    const newTodos = todos.filter((todo,index)=>{
        return index != key;
    })
    setTodos(newTodos);
  }
  return (
    <div className='p-5'>
        <h1 className='text-center'>React Todo App</h1>
        <CreateTodo addTodo={addTodo}/>
        <ListTodo todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
}