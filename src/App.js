import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import List from './components/List.js';
import Header from './components/Header.js';
import SearchBar from './components/SearchBar.js'
import Footer from './components/Footer.js';
import CreateButton from './components/CreateButton.js';
import data from './data/fakeItems.json';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
    <Header/>
    <Container className="wrapper">
      <Row className="mt-2 mb-2">
        <Col>
          <SearchBar/>
        </Col>
        <Col>
          <CreateButton/>
        </Col>
      </Row>
      <Row className="mt-2 mb-2 thing">
        <Col>
          <List data={data}/>
        </Col>
      </Row>
    </Container>
    <Footer/>
  </div>
  );
}

export default App;
