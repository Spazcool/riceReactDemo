import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

function Footer(){
  return(        
    <footer className="footer">
      <div className="container">
        <span className="text-muted">
          some footer text goes here
        </span>
      </div>
    </footer>
  )
}

export default Footer;
