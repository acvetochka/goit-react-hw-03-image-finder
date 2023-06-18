import { Component } from 'react';
import { createPortal } from 'react-dom';

import { ModalBackdrop, ModalStyles } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  // ({ largeImageURL, tags, onModalClick })
  //   {this.props.tags}

  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      //   console.log('Натиснута клавіша');
      this.props.onClose();
    }
  };

  onClickBackdrop = evt => {
    if (evt.currentTarget === evt.target) {
      //   console.log('click on backdrop');
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <ModalBackdrop onClick={this.onClickBackdrop}>
        <ModalStyles>
          {this.props.children}
          {/* <img src={this.props.largeImageURL} alt="" width="450" height="300" /> */}
        </ModalStyles>
      </ModalBackdrop>,
      modalRoot
    );
  }
}
