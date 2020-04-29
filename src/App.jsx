import React from 'react';
import './App.css';
import {
  Router,
  Link,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Recherche">Recherche</Link></li>
            <li><Link to="/CameraLive">Camera Live</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Recherche" component={Recherche} />
          <Route path="/CameraLive" component={CameraLive} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
