import React from 'react';
import Axios from 'axios';
import HomeButton from './HomeButton';
import CameraNearby from './CameraNearby';

class CameraLive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linkWebcam: null,
    };
  }


  printCam = () => {
    Axios.get(`https://api.windy.com/api/webcams/v2/list/webcam=${this.props.webcams.id}?show=webcams:image,location,player&key=VaEdlfWg03XttPZBGoKRTgxTby3EJwhF`)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ linkWebcam: data.result.webcams[0].player.day.embed });
      });
  }

  render() {
    return (
      <div>
        <div className="cameralive-title">
          <h1> webcam title </h1>
        </div>
        <div className="cameralive-cam">
          {/*<video controls width="250"><source src={this.state.linkWebcam}type="video/webm" /> </video>*/}
        </div>
        <button type="button" onClick={this.printCam}>Button</button>
        <div>
          <CameraNearby />
        </div>
        <div>
          <HomeButton />
        </div>
      </div>
    );
  }
}

export default CameraLive;
