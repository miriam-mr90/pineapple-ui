import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './Styles.jsx'

const Spinner = ({
    ...props
}) => (
    <Wrapper {...props} >
        <div className="sk-circle1 sk-circle"></div>
        <div className="sk-circle2 sk-circle"></div>
        <div className="sk-circle3 sk-circle"></div>
        <div className="sk-circle4 sk-circle"></div>
        <div className="sk-circle5 sk-circle"></div>
        <div className="sk-circle6 sk-circle"></div>
        <div className="sk-circle7 sk-circle"></div>
        <div className="sk-circle8 sk-circle"></div>
    </Wrapper>
);

Spinner.propTypes = {
    color: PropTypes.oneOf(['primary', 'secondary']),
    size: PropTypes.oneOf(['small', 'default', 'large']),
};

Spinner.defaultProps = {
  color: 'primary',
  size: 'default',
};

export default Spinner;