import React, { useEffect } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ParallaxTest () {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ParallaxBanner
        className='your-class'
        layers={[
          {
            image: '/uni/tempbg.jpg',
            amount: 1,
            expanded: false,
            children: Title(),
          },
        ]}
        style={{
          height: '100vh',
          zIndex: 0,
        }}
      />
    </div>
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
          <h2 className='Vert-txt' style={{ color: 'black' }}>
            Monday Practice
          </h2>
        </Col>
      </Row>
    </div>
  );
}
