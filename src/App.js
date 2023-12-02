import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import { Navbar,Nav, Container } from 'react-bootstrap';

const App = () => {

  return (
    <Router>
      <div>
        
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
           <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
          <Link to='/users'>Users</Link>
          </Nav>
        </Container>
      </Navbar>
        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
