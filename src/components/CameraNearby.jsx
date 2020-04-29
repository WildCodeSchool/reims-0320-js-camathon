import React from 'react';
import Axios from 'axios';

class Nearby extends React.Component {
  constructor(props) {
    super(props);
    this.states = {
      resultata: null,
    };
  }

  searchcamnearby = () => {
    Axios.get('https://api.windy.com/api/webcams/v2/list/nearby=48.8534,2.3488,100?key=VaEdlfWg03XttPZBGoKRTgxTby3EJwhF')
      .then((response) => response.data)
      .then((data) => {
        this.setState({ resultata: data.result.webcams[0].id });
      });
  }

  render() {
    return (
      <div>
        <button className="nearby-button" type="button" onClick={this.searchcamnearby}>
          clickme
        </button>
      </div>
    );
  }
}
export default Nearby;
