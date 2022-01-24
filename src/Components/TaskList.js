import React from 'react';
import {useSelector} from 'react-redux';
import {ListGroup,Button} from 'react-bootstrap';
import Tasks from './Tasks';






function TaskList({handleDelete}) {

const MyList=useSelector(state=>state.Todos)


  return <div>
     
     {MyList.map(el=>
     <ListGroup>
  <ListGroup.Item action variant="success">
    {el.text}     
    <Tasks key={el.id}/>

  </ListGroup.Item>
  </ListGroup>)



}









  </div>;
}

export default TaskList;
