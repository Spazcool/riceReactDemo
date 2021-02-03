
import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import '../App.css';

function CreateItem(props){
  return(
    <InputGroup className="mb-3 search">
      <FormControl
        value={props.newItemTerm}
        onChange={props.handleInputChange}
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        placeholder="Milk Shake"
      />
      <button onClick={() => props.addItem()}>Add Item</button>
    </InputGroup>
  )
}

export default CreateItem;