
import React from 'react';
import Table from 'react-bootstrap/Table';
import '../App.css';

function List(props){

  const createRow = (datum, index) => {
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
    <>
      <h4>Pending</h4>
      <Table striped bordered hover>
        <thead>
          {createRow(Object.keys(props.data[0]))}
        </thead>
        <tbody>
          {props.data.filter((el) => el.pending === true).map((el)=> createRow(el))}
        </tbody>
      </Table>
      <h4>Crossed Off</h4>
      <Table striped bordered hover>
        <thead>
          {createRow(Object.keys(props.data[0]))}
        </thead>
        <tbody>
        {props.data.filter((el) => el.pending === false).map((el)=> createRow(el))}
        </tbody>
      </Table>
    </>
  )
}

export default List;
