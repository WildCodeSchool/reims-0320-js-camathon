import React from 'react';
import HomeButton from './HomeButton';

function CameraLive() {
  return (
    <div>
      <div className="cameralive-title">
        <h1> Camera title </h1>
      </div>
      <div className="cameralive-cam">retour cam </div>
      <div>
        <button className="cameralive-camnearby" type="button" onClick={''}> camera proche </button>
      </div>
      <div>
        <HomeButton />
      </div>
    </div>
  );
}

export default CameraLive;
