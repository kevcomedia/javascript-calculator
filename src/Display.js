import React from 'react';
import PropTypes from 'prop-types';

function Display({ display }) {
  return <div className="display">{display}</div>;
}

Display.propTypes = {
  display: PropTypes.string.isRequired,
};

export default Display;
