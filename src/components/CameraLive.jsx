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

  componentDidMount() {
    this.printCam();
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
          <h1> welcome to:</h1>
          <p>{this.props.webcams.title}</p>
        </div>
        <iframe src={this.state.linkWebcam} width="300" height="200" frameBorder="20" title="go"> </iframe>
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
