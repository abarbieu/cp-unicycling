import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

type MyState = {
  show: boolean;
};
type MyProps = {};
function MainNavbar () {
  const [ show, setShow ] = useState(false);
  return (
    <Navbar
      style={{ backgroundColor: '#ffeecc' }}
      collapseOnSelect
      fixed='top'
      expand='md'
      variant='light'
    >
      <Container fluid='lg'>
        <Navbar.Brand href='#home'>
          {'Cal Poly Unicycle Club     '}
          <img alt='' src='/uni/uni-logo.svg' width='32' height='32' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto tanPills'>
            <Nav.Link className='navLink' eventKey='home' href='#home'>
              Home
            </Nav.Link>
            <Nav.Link className='navLink' eventKey='meetings' href='#meetings'>
              Meetings
            </Nav.Link>
            <Nav.Link className='navLink' eventKey='gallery' href='#gallery'>
              Gallery
            </Nav.Link>
            <Nav.Link className='navLink' eventKey='contact' href='#contact'>
              Contact Us
            </Nav.Link>
            <NavDropdown title='More' id='collasible-nav-dropdown'>
              <NavDropdown.Item eventKey='members' href='#contact/members'>
                View Members
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey='mailing-list'
                href='#contact/mailing-list'
              >
                Join Mailing lIst
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <div>
                <Navbar.Text
                  style={{ fontSize: 12 }}
                  className='d-inline ml-1 font-weight-bold'
                >
                  cpunicycle@gmail.com
                  <OverlayTrigger
                    placement='right'
                    trigger='click'
                    onToggle={() => {
                      setShow(!show);
                      setTimeout(() => {
                        setShow(false);
                      }, 800);
                    }}
                    show={show}
                    overlay={<Tooltip id='copied'>Copied!</Tooltip>}
                  >
                    <span className='d-inline-block'>
                      <button
                        className='d-inline border-0 ml-1 shr-btn'
                        onClick={() => {
                          navigator.clipboard.writeText('CPUnicycle@gmail.com');
                        }}
                      >
                        <img
                          width='15'
                          height='15'
                          id='copyIcon'
                          src='/uni/copy.svg'
                          alt=''
                        />
                      </button>
                    </span>
                  </OverlayTrigger>
                </Navbar.Text>
              </div>
            </NavDropdown>
          </Nav>
          <Nav className='ml-auto'>
            <Nav.Link eventKey='uni-bball' href='#unicycle-basketball'>
              Unicycle Basketball
            </Nav.Link>
            <Nav.Link
              eventKey='juggling'
              href='https://cpjuggling.wixsite.com/clubpage/home'
            >
              Juggling
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
