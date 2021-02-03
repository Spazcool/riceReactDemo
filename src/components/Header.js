
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

function Header(){
  return(        
    <Container fluid className="App-header">
      <Row className="mb-2">
        <Col >
          <nav >
            <span>Shopping List</span>
          </nav>
        </Col>
      </Row>
    </Container>
  )
}

export default Header;
