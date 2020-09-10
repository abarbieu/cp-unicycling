import React from 'react';
import Routes from './components/routes/Routes';
import Copyright from './components/styling/Copyright';
import { ParallaxProvider } from 'react-scroll-parallax';
import MainNavbar from './components/navbar/MainNavbar';
import './App.css';

type MyState = {
  windowSize: { x: number; y: number };
};
type MyProps = {};

class App extends React.Component<MyProps, MyState> {
  constructor (props: MyProps) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.state = {
      windowSize: { x: 0, y: 0 },
    };
  }
  render () {
    return (
      <ParallaxProvider>
        <div className='Tiled-bg'>
          <MainNavbar />
          <div id='wrap'>
            <Routes />
          </div>
          <Copyright />
        </div>
      </ParallaxProvider>
    );
    //   <ParallaxTest />
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
