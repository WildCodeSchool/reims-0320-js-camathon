/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './Modal.css';
import Country from './Country';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      countryChosen: 'choose a country',
    };
  }

modalShow = () => {
  this.setState({
    modalShow: !this.state.modalShow,
  });
}

countryUpdate = (countryList) => {
  this.setState({
    countryChosen: countryList.country,
    modalShow: false,
  });
}

render() {
  return (
    <>
      <div>
        <button type="button" onClick={this.modalShow}>{this.state.countryChosen}</button>
      </div>
      <div className={this.state.modalShow ? 'modalOn' : 'modalOff'}>
        <Country onClick={this.countryUpdate} />
      </div>
    </>
  );
}
}

export default Modal;
