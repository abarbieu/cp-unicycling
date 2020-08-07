import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import MainNav from './components/navbar/MainNav';
import Home from './components/home/Home';
import './App.css';

type MyState = {
  windowSize: { x: number; y: number };
};
type MyProps = {};

class App extends React.Component<MyProps, MyState> {
  constructor (props: MyProps) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  // <div id='wrap' style={{ maxWidth: 960 }} className='mx-auto'>
  render () {
    return (
      <div id='Tiled-bg'>
        <MainNav />
        <Router>
          <div style={{ height: 50 }} />
          <Switch>
            <Route path='/home'>
              <div
                style={{
                  width: '100vw',
                  height: '100vh',
                }}
                id='Launch-bg'
              >
                <Row className='h-100'>
                  <Col sm={12} className='my-auto'>
                    <h1
                      style={{ color: '#ffffff' }}
                      className='font-weight-bold'
                    >
                      Cal Poly Unicycle Club
                    </h1>
                  </Col>
                </Row>
              </div>
            </Route>
          </Switch>
          <Container fluid='lg'>
            <div id='wrap'>
              <div>
                <main>
                  <Switch>
                    <Route path='/unicycle-basketball'>
                      <h1 className='MainHeader'>Unicycle Basketball!</h1>
                    </Route>
                    <Route path='/meetings'>
                      <h1 className='MainHeader'>Meetings</h1>
                    </Route>
                    <Route path='/gallery'>
                      <h1 className='MainHeader'>Gallery</h1>
                    </Route>
                    <Route path='/contact/members'>
                      <h1 className='MainHeader'>Members</h1>
                    </Route>
                    <Route path='/contact/mailing-list'>
                      <h1 className='MainHeader'>Mailing list</h1>
                    </Route>
                    <Route path='/contact'>
                      <h1 className='MainHeader'>Contact</h1>
                    </Route>
                    <Route path='/home'>
                      <h1 className='MainHeader'>Home</h1>
                      <Home />
                    </Route>
                    <Route path='/' />
                  </Switch>
                </main>
              </div>
            </div>
          </Container>
        </Router>

        {/* <footer className='p-50 footer'>
          {' '}
          <small>&copy; Copyright 2020, Cal Poly Unicycle Club</small>{' '}
        </footer> */}
      </div>
    );
  }

  componentDidMount () {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions () {
    this.setState({
      windowSize: { x: window.innerWidth, y: window.innerHeight },
    });
  }
}

export default App;
