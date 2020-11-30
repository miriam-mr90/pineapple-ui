import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './Styles.jsx'

const Button = ({
    children,
    onClick,
    ...rest
}) => (
    <StyledButton onClick={onClick} {...rest} >
        {children}
    </StyledButton>
);

Button.propTypes = {
    buttonType: PropTypes.oneOf(['primary', 'secondary']),
    children: PropTypes.node.isRequired,
    containsIcon: PropTypes.bool,
    isLoading: PropTypes.bool,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['small', 'default', 'large']),
};

Button.defaultProps = {
  buttonType: 'primary',
  containsIcon: false,
  isLoading: false,
  onClick: () => console.log('On click event'),
  size: 'default',
};

export default Button;