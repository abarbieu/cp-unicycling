import React from 'react';
// import Card from 'react-bootstrap/Card';
import { Parallax } from 'react-scroll-parallax';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Collapse from 'react-bootstrap/Collapse';

// import CardDeck from 'react-bootstrap/CardDeck';
// import CardGroup from 'react-bootstrap/CardGroup';

function Home () {
  return (
    <div>
      <ParallaxUni />
      <div style={{ height: '100vh' }} />
    </div>
  );
}
{
  /* <img
  style={{ height: '100vh', left: '50vw' }}
  src='/uni/tempbg.jpg'
  alt='Uni Club'
/> */
}
function ParallaxUni () {
  return (
    <div>
      <div style={{ height: '100vh' }} />
      <Parallax
        y={[ '100', '-100' ]}
        style={{
          position: 'absolute',
          marginLeft: '-75vh',
          left: '50%',
          height: '100vh',
          backgroundColor: 'black',
        }}
      >
        <img
          style={{
            position: 'absolute',
            marginLeft: '-75vh',
            left: '50%',
            height: '100vh',
            backgroundColor: 'black',
          }}
          src='/uni/tempbg.jpg'
          alt='Uni Club'
        />
      </Parallax>

      <div style={{ height: '100vh' }} />
      <div style={{ height: '100vh' }} />
    </div>
  );
}
function TitleLogo () {
  return (
    <Row className='h-100 w-100'>
      <Col className='m-auto'>
        <h2 style={{ color: 'lightgrey', fontSize: '30%' }}>
          Cal Poly Unicycle Club
        </h2>
      </Col>
    </Row>
  );
}
function Title () {
  return (
    <div
      className='Tiled-bg'
      style={{ width: '20%', height: '100%', backgroundColor: '#ffeecc' }}
    >
      <Row className='h-100'>
        <Col className='my-auto'>
          <p className='Vert-txt' style={{ color: 'black', fontSize: '90%' }}>
            Change Picture & Title
          </p>
        </Col>
      </Row>
    </div>
  );
}
export default Home;
