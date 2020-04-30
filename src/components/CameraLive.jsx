import React from 'react';
import Axios from 'axios';
import HomeButton from './HomeButton';
import './cameraLive.css';

class CameraLive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linkWebcam: null,
    };
  }

  


  render() {
    return (
      <div className="globalCameraLiveStyle">
        <div className="cameralive-title">
          <h2> welcome to:</h2>
          <p>{this.props.live.title}</p>
        </div>
        <iframe src={this.props.live.player.day.embed} width="300" height="200" frameBorder="20" title="go"></iframe>
        {/*<div>
          <CameraNearby />
        </div>*/}
        <div className='homeButton'>
          <HomeButton />
        </div>
      </div>
    );
  }
}

export default CameraLive;
