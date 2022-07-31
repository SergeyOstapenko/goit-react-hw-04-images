import { ButtonStyles } from './Button.styles';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <ButtonStyles type="button" onClick={onClick}>
      Load more
    </ButtonStyles>
  );
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export { Button };