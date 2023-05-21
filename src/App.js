import { useState } from 'react';
import CreateTodo from './components/CreateTodo';
import ListTodo from './components/ListTodo';

export default function App() {
  const [todos,setTodos] = useState([])
  const addTodo = (todo) => {
    setTodos([...todos,todo]);
    console.log(todos)
  }
  return (
    <div className='p-5'>
        <h1 className='text-center'>React Todo App</h1>
        <CreateTodo addTodo={addTodo}/>
        <ListTodo todos={todos}/>
    </div>
  );
}