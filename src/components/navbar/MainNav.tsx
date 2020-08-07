import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

type MyState = {
  copyImg: string;
};
type MyProps = {};
class MainNav extends Component<MyProps, MyState> {
  constructor (props: MyProps) {
    super(props);

    this.state = {
      copyImg: '/copy.svg',
    };
  }
  render () {
    return (
      <Navbar
        collapseOnSelect
        sticky='top'
        expand='md'
        bg='light'
        variant='light'
      >
        <Navbar.Brand href='#home'>
          {'Cal Poly Unicycle Club     '}
          <img alt='' src='/uni-logo.svg' width='32' height='32' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#meetings'>Meetings</Nav.Link>
            <Nav.Link href='#contact'>Contact Us</Nav.Link>
            <NavDropdown title='More' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#contact/members'>
                View Members
              </NavDropdown.Item>
              <NavDropdown.Item href='#contact/mailing-list'>
                Join Mailing lIst
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <div>
                <Navbar.Text
                  style={{ fontSize: 12 }}
                  className='d-inline ml-1 font-weight-bold'
                >
                  CPUnicycle@gmail.com
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
                      src={this.state.copyImg}
                      alt=''
                    />
                  </button>
                </Navbar.Text>
              </div>
            </NavDropdown>
          </Nav>
          <Nav className='ml-auto mr-0'>
            <Nav.Link href='#unicycle-basketball'>Unicycle Basketball</Nav.Link>
            <Nav.Link href='https://cpjuggling.wixsite.com/clubpage/home'>
              Juggling
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MainNav;
