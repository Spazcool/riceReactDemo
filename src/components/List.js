
import React from 'react';
import Table from 'react-bootstrap/Table';
import '../App.css';

function List(props){

  const createRow = (datum, index, term) => {
    const att = Object.keys(datum);
    const cells = att.map((cell) => (
      <td key={`${cell}-cell-${index}`}>{datum[cell] === undefined ? 'X' : datum[cell]}</td>
    ));

    return (  
      <tr>
        {cells}
      </tr>
    )
  }

  return(        
    <Table striped bordered hover>
      <thead>
        {createRow(Object.keys(props.data[0]))}
      </thead>
      <tbody>
        {props.data.map((el)=> createRow(el))}
      </tbody>
    </Table>
  )
}

export default List;
