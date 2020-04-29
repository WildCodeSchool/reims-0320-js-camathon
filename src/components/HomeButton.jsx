import React from 'react';
import './search.css'

import {
    Router,
    Link,
    Switch,
    Route,
  } from 'react-router-dom';

function HomeButton() {

    return(
        <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
    )
}

export default HomeButton;
