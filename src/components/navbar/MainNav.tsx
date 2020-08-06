import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

class MainNav extends Component {
  render () {
    return (
      <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
        <Navbar.Brand href='#home'>Cal Poly Unicycle Club</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#meetings'>Meetings</Nav.Link>
            <NavDropdown title='Contact Us' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#contact/email'>
                CPUnicycle@gmail.com
              </NavDropdown.Item>
              <NavDropdown.Item href='#contact/members'>
                View Members
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#contact/mailing-list'>
                Join Mailing lIst
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href='#unicycle-basketball'>Unicycle Basketball</Nav.Link>
            <Nav.Link
              eventKey={2}
              href='https://cpjuggling.wixsite.com/clubpage/home'
            >
              Juggling
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MainNav;
