import React from 'react';
import PropTypes from 'prop-types';

function Display({ display }) {
  return <div className="display">{display ? display : 'ERROR'}</div>;
}

Display.propTypes = {
  display: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
};

export default Display;
