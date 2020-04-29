import React, { useState } from 'react';
import Search from './components/Search.jsx';
import './App.css';
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
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
  );
}

export default App;
