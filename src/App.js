import './App.css';
import CreateTodo from './components/CreateTodo';
import ListTodo from './components/ListTodo';

export default function App() {
  return (
    <div className='p-5'>
        <h1 className='text-center'>React Todo App</h1>
        <CreateTodo/>
        <ListTodo/>
    </div>
  );
}