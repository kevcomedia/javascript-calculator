import React from 'react';
import PropTypes from 'prop-types';

function CalculatorButton({ label, size, color, onClick }) {
  let classes = 'btn';
  if (size) {
    classes += ` btn_size_${size}`;
  }
  if (color) {
    classes += ` btn_color_${color}`;
  }

  const handleClick = (e) => {
    onClick();
  }

  return (
    <button className={classes} type="button" onClick={handleClick}>
      {label}
    </button>
  );
}

CalculatorButton.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default CalculatorButton;
