import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

let defaultEditData = {
  index : -1,
  input : ''
}

function App() {

  const [input, setInput] = useState('')
  const [editData, setEditData] = useState(defaultEditData);
  const [todos, setTodos] = useState(() =>{
     let storedData = JSON.parse(localStorage.getItem('todos'));
     return storedData || []
  });

  useEffect(() => {
    if(todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos))
    }
  }, [todos])

  function addTodo(value) {
    setTodos([...todos, value])
  }

  function deleteTodo(indexValue) {
    let filtered = todos.filter((todo, index) => {
      return index !== indexValue;
    })
    setTodos(filtered);
  }

  function toggleChecked(index) {
    let updatedTodos = [...todos];
    updatedTodos[index].checked = !updatedTodos[index].checked;

    setTodos(updatedTodos)
  }

  function editTodo(index, todo) {
    setEditData({
      index : index,
      input : todo
    })
  }

  function updateTodo(index, todo) {
    let updatedTodo = [...todos];
    updatedTodo[index].input = todo;
    setTodos(updatedTodo);

    setEditData({...defaultEditData});
  }

  return (
    <div class='container'>
      <h1 class='todo-heading'>Todo</h1>
      <TodoInput setInput={setInput} input={input} addTodo={addTodo} editData={editData} updateTodo={updateTodo}/>
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} editData={editData} toggleChecked={toggleChecked} / >
    </div>
  )
}

export default App;
