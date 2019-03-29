import React, { Component } from 'react';
import './App.css';
import routes from './routes'
import NavBar from './Components/NavBar/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar className='NavBar'/>
      {routes}
      </div>
    );
  }
}

export default App;
