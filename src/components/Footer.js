import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

function Footer(){
  return(        
    <Container fluid className="App-header">
      <Row className="mb-2">
        <Col >
          <nav >
            <span>Footer</span>
          </nav>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer;
