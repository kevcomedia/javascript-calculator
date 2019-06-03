import { useReducer } from 'react';

function inputDigit(currentInput, digit) {
  const numberInputs = currentInput.split(/[-+*/]/);
  const lastNumberInput = numberInputs[numberInputs.length - 1];

  if (lastNumberInput === '0') {
    if (digit === '0') {
      // Don't change the input if the current number input is 0
      // and the 0 button is pressed (e.g., the input string is '12*0').
      return { input: currentInput };
    } else {
      // Replace the 0 at the end of the input string with the digit input.
      return { input: currentInput.replace(/0$/, digit) };
    }
  }
  // Typical case: input string doesn't end with the number '0'
  // (NOT just the digit '0'; e.g., '2+10').
  return { input: currentInput + digit };
}

/**
 * Appends the operator input to the current input string. If the input string.
 * ends with another operator, that operator is replaced instead.
 */
function inputOperator(currentInput, operator) {
  const isLastInputOperator = /[-+*/]$/.test(currentInput);
  if (isLastInputOperator) {
    return { input: currentInput.replace(/.$/, operator) };
  }
  return { input: currentInput + operator };
}

function reducer(state, action) {
  switch (action.type) {
    case 'digit':
      return inputDigit(state.input, action.digit);
    case 'decimal':
      return { input: state.input + '.' };
    case 'operator':
      return inputOperator(state.input, action.operator);
    case 'clear':
      return { input: '0' };
    default:
      throw new Error();
  }
}

function useCalculatorInput() {
  const [state, dispatch] = useReducer(reducer, { input: '0' });
  return [state.input, dispatch];
}

export default useCalculatorInput;
