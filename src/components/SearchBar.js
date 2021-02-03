import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import '../App.css';

function SearchBar(props){
  return(        
    <InputGroup className="mb-3 search">
      <FormControl
        value={props.searchTerm}
        onChange={props.handleTermChange}
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        placeholder="Search Items"
      />
    </InputGroup>
  )
}

export default SearchBar;