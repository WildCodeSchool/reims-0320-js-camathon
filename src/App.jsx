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
    <BrowserRouter>
      <div className="appStyle">
        <ul className="hidden">
          <Link to="/" />
          <Link to="/live" />
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/live" component={CameraLive} />
        </Switch>
        <button type="button"><Link to="/search">Go</Link></button>
      </div>
    </BrowserRouter>

  );
}

export default App;
