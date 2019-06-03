import React from 'react';
import CalculatorButton from './CalculatorButton';

function CalculatorButtons() {
  return (
    <div className="buttons">
      <CalculatorButton label="AC" size="wide" color="red" />
      <CalculatorButton label="/" color="light" />
      <CalculatorButton label="*" color="light" />
      <CalculatorButton label="7" />
      <CalculatorButton label="8" />
      <CalculatorButton label="9" />
      <CalculatorButton label="-" color="light" />
      <CalculatorButton label="4" />
      <CalculatorButton label="5" />
      <CalculatorButton label="6" />
      <CalculatorButton label="+" color="light" />
      <CalculatorButton label="1" />
      <CalculatorButton label="2" />
      <CalculatorButton label="3" />
      <CalculatorButton label="=" size="tall" color="blue" />
      <CalculatorButton label="0" size="wide" />
      <CalculatorButton label="." />
    </div>
  );
}

export default CalculatorButtons;
