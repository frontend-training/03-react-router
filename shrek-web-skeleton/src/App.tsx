import * as React from 'react';
import './App.css';
import Home from './components/home';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
          <h1>Shrek</h1>
          <div>
              <div className="menu">
                  Home | About | Location | Friends
              </div>
              <div className="content">
                  <Home/>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
