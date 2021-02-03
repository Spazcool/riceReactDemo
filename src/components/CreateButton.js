
import React from 'react';
import '../App.css';

function CreateButton(props){
  return(
    <button onClick={() => props.addItem()}>Add Item</button>
  )
}

export default CreateButton;