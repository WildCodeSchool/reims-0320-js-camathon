import React, { useState } from 'react';
import Search from './components/Search';
import Home from './components/Home';
import CameraLive from './components/CameraLive';
import './App.css';
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <nav>
            <ul className="hidden">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/search">Search</Link></li>
              <li><Link to="/live">Camera Live</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/live" component={CameraLive} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
