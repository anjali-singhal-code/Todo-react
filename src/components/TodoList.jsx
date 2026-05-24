import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function TodoList(props) {
  return (
   <ul>
    {
      props.todos.length > 0 ? props.todos.map((todo, index) => (
       <li className="d-flex p-2 list" key={index}>
        <input className='list-checkbox' checked={todo.checked} type="checkbox" onClick={() => props.toggleChecked(index)} />
        <div className='list-text' style={{textDecoration : todo.checked ? "line-through" : "none"}}>{todo.input}</div>
        <div>
          <button className='edit-button' disabled={props.editData.index !== -1} onClick={() => {
            props.editTodo(index, todo.input)
          }}>
            <FaEdit />
          </button>
          <button className='delete-button' disabled={props.editData.index !== -1} onClick={() => {
            props.deleteTodo(index)
          }}>
            <MdDelete />
          </button>
        </div>
       </li>
        
      )) : <li className="d-flex p-2 no-todo">No Todo Here</li>
    }
   </ul>
  )
}