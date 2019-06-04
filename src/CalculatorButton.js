import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function CalculatorButton({
  color,
  keyTrigger,
  label,
  onActivate,
  size,
  tooltip,
}) {
  let classes = 'btn';
  if (size) {
    classes += ` btn_size_${size}`;
  }
  if (color) {
    classes += ` btn_color_${color}`;
  }

  const handleActivate = (e) => {
    onActivate();
  };

  useKeyDown(keyTrigger, handleActivate);

  return (
    <button
      className={classes}
      type="button"
      title={tooltip}
      onClick={handleActivate}
    >
      {label}
    </button>
  );
}

CalculatorButton.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  onActivate: PropTypes.func,
  keyTrigger: PropTypes.string,
  tooltip: PropTypes.string,
};

function useKeyDown(key, callback) {
  const handleKeyDown = (event) => {
    if (!key) return;

    // Override browser keybind for quick search.
    // There's nothing to search anyway.
    if (event.key === '/') {
      event.preventDefault();
    }

    if (event.key === key) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });
}

export default CalculatorButton;
