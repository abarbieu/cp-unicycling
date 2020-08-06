// import { elastic as Sidebar } from 'react-burger-menu';
// import Header from './components/todolist/Header';
// import TodoList from './components/todolist/TodoList';
// import LaunchMenu from './resources/launch-menu.json';
// import TreeMenu from './components/tree_menu/TreeMenu';
// import Cover from './components/cover/TreeMenuCover';
// import Panels from './components/panels/Panels';
// import MyAlert from './components/test/MyAlert';
import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import MainNav from './components/navbar/MainNav';
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
  render () {
    return (
      <div className='Tiled-back'>
        <div>
          <MainNav />
        </div>
        <div>
          <main>
            <Router>
              <Switch>
                <Route path='/unicycle-basketball' />
                <Route path='/meetings' />
                <Route path='/gallery' />
                <Route path='/contact' />
                <Route path='/' />
              </Switch>
            </Router>
          </main>
        </div>
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
