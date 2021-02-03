
import React, { useEffect } from 'react';
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

  const sumPending = (arr) => {
    const prices = arr.map((el) => el.price);
    const sum = prices.reduce((a, b) => a + b);
    return sum;
  };

  const includesSearchTerm = (obj, term) => {
    if(term.length < 1) return true;
    let included = false;
    const keys = Object.keys(obj);
    keys.forEach((key) => {
      if(obj[key] !== null && obj[key].toString().includes(term)){
        included = true;
      }
    })
    return included;
  }

  // make category, quantity & price editble text fields
  const pending = props.data
    .filter((el) => el.pending === true && includesSearchTerm(el, props.searchTerm))
     //{/* NEED TO APPLY THE SORT ON THE EL.NAME BEFORE CALLING THE MAP */}
    .map((el)=> createRow(el));
  const crossedOff = props.data
    .filter((el) => el.pending === false && includesSearchTerm(el, props.searchTerm))
    .map((el)=> createRow(el));
  const pendingTotal = sumPending(props.data.filter((el) => el.pending === true));
  const halfTableWidth = Object.keys(props.data[0]).length / 2;

  return(
    <>
      <h4>Pending</h4>
      <Tables striped bordered hover>
        <thead>
          {createRow(Object.keys(props.data[0]), null, true)}
        </thead>
        <tbody>
          {pending}
          <tr>
            <td colSpan={halfTableWidth}>Pending Total: </td>
            <td colSpan={halfTableWidth}>{pendingTotal}</td>
          </tr>

        </tbody>
      </Tables>
      <h4>Crossed Off</h4>
      <Tables striped bordered hover>
        <thead>
          {createRow(Object.keys(props.data[0]))}
        </thead>
        <tbody>
          {crossedOff}
        </tbody>
      </Tables>
    </>
  )
}

export default List;
