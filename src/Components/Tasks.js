import React from 'react';
import {useDispatch} from 'react-redux';
import {Button} from 'react-bootstrap';

function Delete({key}) {

    const Dispatch=useDispatch();

    const handleDelete=()=>Dispatch({
  
        type:'Delete',
        payload:key
      })

  return <div>

<Button variant="danger" onClick={()=>handleDelete(key)}>Delete</Button>

  </div>;
}

export default Delete;