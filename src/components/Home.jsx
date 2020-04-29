import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import Axios from 'axios'; 



class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      codeCountry : '',
    }
  }

  getCodeCountry = (code) => {
    Axios.get(`https://api.windy.com/api/webcams/v2/list/country=${this.state.codeCountry}?key=VaEdlfWg03XttPZBGoKRTgxTby3EJwhF`)
      .then((response) => {
        this.props.setWebcams(response.data.result.webcams);
      })
    this.setState({
      codeCountry: code,
    })
}

   render() {
    return (
      <div className="homeStyle">
        <h1 className="homeTitle">CamAthon</h1>
        <div className="homeText">
          <p>Welcome! Prepare your travel before your luggages</p>
          <p>Choose the country that you want to visit, then the city you are interested by and enjoy your journey.</p>
        </div>
        <Modal getCodeCountry={this.getCodeCountry}/>
        <Link to="/search">Go</Link>
      </div>
    );
   }
  
}
export default Home;
