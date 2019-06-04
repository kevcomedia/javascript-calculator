import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

function Display({ display }) {
  if (display) {
    return <div className="display">{display}</div>;
  } else {
    return <div className="display display_error">ERROR</div>;
  }
}

Display.propTypes = {
  display: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
};

export default Display;
