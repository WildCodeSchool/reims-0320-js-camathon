import React from 'react';
import HomeButton from './HomeButton';
import CameraNearby from './CameraNearby';

function CameraLive() {
  return (
    <div>
      <div className="cameralive-title">
        <h1> Camera title </h1>
      </div>
      <div className="cameralive-cam">retour cam </div>
      <div>
        <CameraNearby />
      </div>
      <div>
        <HomeButton />
      </div>
    </div>
  );
} 

export default CameraLive;
