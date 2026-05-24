import { useState , useEffect} from "react";


export default function TodoInput(props) {

  function onAddBtn() {
    if(props.editData.index !== -1) {
      props.updateTodo(props.editData.index, props.input)
    } else {
      props.addTodo({
        input : props.input,
        checked : false
      });
    }
    props.setInput('');
  }

  function keyDown(e) {
    if(e.key === 'Enter') {
      onAddBtn();
    }
  }

  let onChanges = (e) => {
    props.setInput(e.target.value)
  }

  useEffect(() => {
    props.setInput(props.editData.input)
  }, [props.editData.index])


  return (
    <div>
      <input className='todo-input' type="text" value={props.input} placeholder="Enter your task here.." onChange={onChanges} onKeyDown={keyDown} />
      
      <button onClick={onAddBtn} className="btn add-button">
        {
          props.editData.index !== -1 ? 'Update' : 'Add'
        }
      </button>
    </div>
  )
}