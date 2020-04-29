import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Modal from './Modal';


function Home() {
  return (
    <div className="homeStyle">
      <h1 className="homeTitle">CamAthon</h1>
      <div className="homeText">
        <p>Welcome! Prepare your travel before your luggages</p>
        <p>Choose the country that you want to visit, then the city you are interested by and enjoy your journey.</p>
      </div>
      <Modal />
      <button type="button"><Link to="/search">Go</Link></button>
    </div>
  );
}
export default Home;
