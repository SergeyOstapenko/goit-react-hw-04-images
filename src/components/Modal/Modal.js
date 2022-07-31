import PropTypes from 'prop-types';
import { Component } from 'react';
import { ModalBox, Backdrop, ModalImg } from './Modal.styles';
//--------------------------------------------------------------------------//

export class Modal extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.onTap);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onTap);
  }

  onTap = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handlerBackDrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Backdrop onClick={this.handlerBackDrop}>
        <ModalBox>
          <ModalImg src={this.props.image} alt="def" />
        </ModalBox>
      </Backdrop>
    );
  }
}