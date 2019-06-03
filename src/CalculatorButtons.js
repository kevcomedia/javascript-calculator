import React from 'react';
import CalculatorButton from './CalculatorButton';

function CalculatorButtons({ dispatch }) {
  const dispatchDigit = (digit) => {
    return () => {
      dispatch({ type: 'digit', digit });
    };
  };

  const dispatchOperator = (operator) => {
    return () => {
      dispatch({ type: 'operator', operator });
    };
  };

  return (
    <div className="buttons">
      <CalculatorButton label="AC" size="wide" color="red" />
      <CalculatorButton
        label="/"
        color="light"
        onClick={dispatchOperator('/')}
      />
      <CalculatorButton
        label="*"
        color="light"
        onClick={dispatchOperator('*')}
      />
      <CalculatorButton label="7" onClick={dispatchDigit(7)} />
      <CalculatorButton label="8" onClick={dispatchDigit(8)} />
      <CalculatorButton label="9" onClick={dispatchDigit(9)} />
      <CalculatorButton
        label="-"
        color="light"
        onClick={dispatchOperator('-')}
      />
      <CalculatorButton label="4" onClick={dispatchDigit(4)} />
      <CalculatorButton label="5" onClick={dispatchDigit(5)} />
      <CalculatorButton label="6" onClick={dispatchDigit(6)} />
      <CalculatorButton
        label="+"
        color="light"
        onClick={dispatchOperator('+')}
      />
      <CalculatorButton label="1" onClick={dispatchDigit(1)} />
      <CalculatorButton label="2" onClick={dispatchDigit(2)} />
      <CalculatorButton label="3" onClick={dispatchDigit(3)} />
      <CalculatorButton label="=" size="tall" color="blue" />
      <CalculatorButton label="0" size="wide" onClick={dispatchDigit(0)} />
      <CalculatorButton label="." />
    </div>
  );
}

export default CalculatorButtons;
