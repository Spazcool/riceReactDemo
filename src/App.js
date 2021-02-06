import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import List from './components/List.js';
import Header from './components/Header.js';
import SearchBar from './components/SearchBar.js'
import Footer from './components/Footer.js';
import CreateItem from './components/CreateItem.js';
import data from './data/fakeItems.json';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [items, setItems] = useState(data);
  const [item, setItem] = useState('');
  const [term, setTerm] = useState('');

  const togglePending = (e) => {
    const rowID = e.target.parentElement.id.substring(4);
    const modded = items.map(item => {
      if(item.id === parseInt(rowID)){
        item.pending = !item.pending;
      }
      return item;
    })
    setItems(modded)
  };

  const addItem = () => {
    const newItem = {
      "id" : items.length + 1,
      "name" : item,
      "category" : "",
      "quantity" : 0,
      "price" : 0,
      "pending" : true
    };

    setItems([...items, newItem]);
    setItem('');
  };

  const handleEditableFields = (e, dataType, id) => {
    let tempItems = [...items];
    tempItems.forEach(item => {
      if(item.id === id){
        item[dataType] = e.target.value;
      }
    });

    setItems([...tempItems]);
  };

  const handleInputChange = (e) => {
    setItem(e.target.value);
  };

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="App">
    <Header/>
    <Container className="wrapper">
      <Row className="mt-2 mb-2">
        <Col>
          <SearchBar
            searchTerm={term}
            handleTermChange={handleTermChange}
          />
        </Col>
        <Col>
          <CreateItem
            newItemTerm={item}
            handleInputChange={handleInputChange}
            addItem={addItem}
          />
        </Col>
      </Row>
      <Row className="mt-2 mb-2 thing">
        <Col>
          <List 
            data={items}
            togglePending={togglePending}
            searchTerm={term}
            handleEditableFields={handleEditableFields}
          />
        </Col>
      </Row>
    </Container>
    <Footer/>
  </div>
  );
}

export default App;
