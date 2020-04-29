import React from 'react';
import './Home.css';
import Modal from './Modal';

function Home() {
  return (
    <div className="homeGlobalStyle homeStyle">
      <h1 className="homeTitle">CamAthon</h1>
      <div className="homeText">
        <p>Welcome! Prepare your travel before your luggages</p>
        <p>Choose the country that you want to visit, then the city you are interested by and enjoy your journey.</p>
      </div>
      <Modal />
    </div>
  );
}
export default Home;
