import * as React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import About from "./components/about";
import Friends from "./components/friends";
import Home from './components/home';
import Location from './components/location';

class App extends React.Component {
    public render() {
        return (
            <Router>
                <div className="App">
                    <h1>Shrek</h1>
                    <div>
                        <div className="menu">
                            <Link to="/">Home</Link> |
                            <Link to="/about">About</Link> |
                            <Link to="/location">Location</Link> |
                            <Link to="/friends">Friends</Link>
                        </div>
                        <div className="content">
                            <Route path="/" exact component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/location" component={Location} />
                            <Route path="/friends" component={Friends} />
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
