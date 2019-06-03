import React from 'react';
import PropTypes from 'prop-types';

function CalculatorButton({ label, size, color }) {
  let classes = 'btn';
  if (size) {
    classes += ` btn_size_${size}`;
  }
  if (color) {
    classes += ` btn_color_${color}`;
  }

  return (
    <button className={classes} type="button">
      {label}
    </button>
  );
}

CalculatorButton.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
};

export default CalculatorButton;
