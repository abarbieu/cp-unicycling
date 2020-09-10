import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from '../styling/Header';
import Bball from '../bball/Bball';
import Contact from '../contact/Contact';
import Meetings from '../meetings/Meetings';
import Gallery from '../gallery/Gallery';
import Home from '../home/Home';

// import Col from 'react-bootstrap/Col';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

function Routes () {
  return (
    <Router>
      <div style={{ height: 50 }} />
      <Switch>
        <Route path='/home' />
      </Switch>
      <Container fluid='lg'>
        <div>
          <main>
            <Switch>
              <Route path='/unicycle-basketball'>
                <Header>Unicycle Basketball!</Header>
                <Bball />
              </Route>
              <Route path='/meetings'>
                <Header>Meetings</Header>
                <Meetings />
              </Route>
              <Route path='/gallery'>
                <Header>Gallery</Header>
                <Gallery />
              </Route>
              <Route path='/contact'>
                <Header>Contact</Header>
                <Contact />
              </Route>
              <Route path='/home'>
                {/* <Header>Home</Header> */}
                <Home />
              </Route>
              <Route path='/'>
                <Redirect to='/home' />
              </Route>
            </Switch>
          </main>
        </div>
      </Container>
    </Router>
  );
}

/* <div
style={{
  height: '100vh',
}}
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
</div> */

export default Routes;
