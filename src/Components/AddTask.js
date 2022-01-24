import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {InputGroup,FormControl,Button} from 'react-bootstrap';

function AddTask() {

  const Dispatch=useDispatch();

  const [newTodo,setNewTodo]=useState();

  const handleInput=(event)=>{setNewTodo(event.target.value)};

  const handleClick=()=>Dispatch({

    type:'Add',
    payload:{
    text: newTodo,
    id:Math.random()
    }
  })
  

  return <div>
      
    <input
      type="text"
      value={newTodo}
      onChange={handleInput}
    />
    <Button variant="warning" onClick={handleClick} >Add</Button>
 
  </div>;
}

export default AddTask;
