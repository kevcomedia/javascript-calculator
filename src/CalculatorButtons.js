import React from 'react';
import CalculatorButton from './CalculatorButton';
import './CalculatorButtons.css';

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
      <CalculatorButton
        label="AC"
        size="wide"
        color="red"
        keyTrigger="Escape"
        tooltip="Esc"
        onActivate={() => dispatch({ type: 'clear' })}
      />
      <CalculatorButton
        label="/"
        color="light"
        keyTrigger="/"
        onActivate={dispatchOperator('/')}
      />
      <CalculatorButton
        label="*"
        color="light"
        keyTrigger="*"
        onActivate={dispatchOperator('*')}
      />
      <CalculatorButton
        label="7"
        keyTrigger="7"
        onActivate={dispatchDigit(7)}
      />
      <CalculatorButton
        label="8"
        keyTrigger="8"
        onActivate={dispatchDigit(8)}
      />
      <CalculatorButton
        label="9"
        keyTrigger="9"
        onActivate={dispatchDigit(9)}
      />
      <CalculatorButton
        label="-"
        color="light"
        keyTrigger="-"
        onActivate={dispatchOperator('-')}
      />
      <CalculatorButton
        label="4"
        keyTrigger="4"
        onActivate={dispatchDigit(4)}
      />
      <CalculatorButton
        label="5"
        keyTrigger="5"
        onActivate={dispatchDigit(5)}
      />
      <CalculatorButton
        label="6"
        keyTrigger="6"
        onActivate={dispatchDigit(6)}
      />
      <CalculatorButton
        label="+"
        color="light"
        keyTrigger="+"
        onActivate={dispatchOperator('+')}
      />
      <CalculatorButton
        label="1"
        keyTrigger="1"
        onActivate={dispatchDigit(1)}
      />
      <CalculatorButton
        label="2"
        keyTrigger="2"
        onActivate={dispatchDigit(2)}
      />
      <CalculatorButton
        label="3"
        keyTrigger="3"
        onActivate={dispatchDigit(3)}
      />
      <CalculatorButton
        label="="
        size="tall"
        color="blue"
        keyTrigger="Enter"
        tooltip="Enter"
        onActivate={() => dispatch({ type: 'equals' })}
      />
      <CalculatorButton
        label="0"
        size="wide"
        keyTrigger="0"
        onActivate={dispatchDigit(0)}
      />
      <CalculatorButton
        label="."
        keyTrigger="."
        onActivate={() => dispatch({ type: 'decimal' })}
      />
    </div>
  );
}

export default CalculatorButtons;
