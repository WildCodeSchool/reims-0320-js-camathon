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
  const [code, setCode] = useState([]);
  const [live, setLive] = useState(null);

  return (
    <BrowserRouter>
      <div className="appStyle">
        <ul className="hidden">
          <Link to="/" />
        </ul>
        <Switch>
          <Route exact path="/">
            <Home setWebcams={setWebcams} setCode={setCode} />
          </Route>
          <Route path="/search" render={(props) => (
            <Search {...props} setWebcams={setWebcams} webcams={webcams} code={code} setLive={setLive} />
          )} />
          <Route path="/live">
            <CameraLive live={live}/> 
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
