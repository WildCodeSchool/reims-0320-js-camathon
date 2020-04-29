/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './Modal.css';
import Country from './Country';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
    };
  }

  modalShow = () => {
    this.setState({ modalShow: !this.state.modalShow });
  }

  render() {
    return (
      <>
        <div>
          <button type="button" onClick={this.modalShow}>Country</button>
        </div>
        <div className={this.state.modalShow ? 'modalOff' : 'modalOn'}>
          <Country />
        </div>
      </>
    );
  }
}

export default Modal;
