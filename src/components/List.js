
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
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default List;
