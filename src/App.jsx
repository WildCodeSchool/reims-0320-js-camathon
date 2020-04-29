import React, { useState } from 'react';
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
} from 'react-router-dom';

import Search from './components/Search';
import Home from './components/Home';
import CameraLive from './components/CameraLive';
import './App.css';

function App() {
  const [webcams, setWebcams] = useState([]);
  return (
    <BrowserRouter>
      <div className="appStyle">
        <ul className="hidden">
          <Link to="/" />
          <Link to="/live" />
        </ul>
        <Switch>
          <Route exact path="/" >
            <Home setWebcams={setWebcams} />
          </Route>
          <Route path="/search">
            <Search webcams={webcams} />
          </Route>
          <Route path="/live" component={CameraLive} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
