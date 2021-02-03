
import React from 'react';
import Tables from 'react-bootstrap/Table';
import '../App.css';

function List(props){

  const createRow = (datum, index, header) => {
    const att = Object.keys(datum);
    const cells = att.map((cell) => (
        <td key={`${cell}-cell-${index}`}>
          {
            datum[cell] === undefined || datum[cell] === false ? 'X' :
            datum[cell] === true ? '✓' : datum[cell]
          }
        </td>
      ));

      return (  
      <tr onClick={(event) => props.togglePending(event)} id={`row-${datum.id}`} key={`row-${datum.id}`}>
        {cells}
      </tr>
    )
  }

  // clickevent to toggle pending value when row is clicked on
  // make category, quantity & price editble text fields

  return(    
    <>
      <h4>Pending</h4>
      <Tables striped bordered hover>
        <thead>
          {createRow(Object.keys(props.data[0]), null, true)}
        </thead>
        <tbody>
          {props.data.filter((el) => el.pending === true).map((el)=> createRow(el))}
          <tr>summ of prices</tr>
        </tbody>
      </Tables>
      <h4>Crossed Off</h4>
      <Tables striped bordered hover>
        <thead>
          {createRow(Object.keys(props.data[0]))}
        </thead>
        <tbody>
          {props.data.filter((el) => el.pending === false).map((el)=> createRow(el))}
        </tbody>
      </Tables>
    </>
  )
}

export default List;
