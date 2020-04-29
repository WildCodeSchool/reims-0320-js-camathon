import React from 'react';

const country = ['France'];

class Country extends React.Component {
  render() {
    return (
      <div>
        { country.map((country) => <p>{ country }</p> ) }
      </div> 
    );
  }
}

export default Country;
