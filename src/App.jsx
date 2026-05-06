import { useState } from 'react'
import './App.css'
import Heading from './components/Heading';
import ToDoList from './components/ToDoList';
import { list } from './utils/mockData';

function App() {
    const [todo,setToDo] = useState(()=> {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : list;
  });

   const handleDelete = (id) => {
    const updatedTodos = todo.filter(todoo => todoo.id !== id);
    setToDo(updatedTodos);
  };

    useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  const handleToggle = (id) => {
  const updatedTodos = todo.map(item =>
    item.id === id
      ? { ...item, isCompleted: !item.isCompleted }
      : item
  );
}

  return (
    <div>
      <Heading />
      <ToDoList listData= {todo} setToDo = {setToDo} onDelete={handleDelete} onToggle={handleToggle} />
      <br />
    </div>
  )
}

export default App;
