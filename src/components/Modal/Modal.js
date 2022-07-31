import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { ModalBox, Backdrop, ModalImg } from './Modal.styles';
//--------------------------------------------------------------------------//

export const Modal = ({ image, onClose }) => {
  useEffect(() => {
    const onTap = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onTap);

    return () => {
      window.removeEventListener('keydown', onTap);
    };
  }, [onClose]);

  const handkerBackDrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <Backdrop onClick={handkerBackDrop}>
      <ModalBox>
        <ModalImg src={image} alt="def" />
      </ModalBox>
    </Backdrop>
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};


// export class Modal extends Component {
//   static propTypes = {
//     image: PropTypes.string.isRequired,
//     onClose: PropTypes.func.isRequired,
//   };
//   componentDidMount() {
//     window.addEventListener('keydown', this.onTap);
//   }
//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.onTap);
//   }

//   onTap = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };
//   handlerBackDrop = e => {
//     if (e.target === e.currentTarget) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return (
//       <Backdrop onClick={this.handlerBackDrop}>
//         <ModalBox>
//           <ModalImg src={this.props.image} alt="def" />
//         </ModalBox>
//       </Backdrop>
//     );
//   }
// }