import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'digit':
      return { input: state.input + action.digit };
    case 'decimal':
      return { input: state.input + '.' };
    case 'operator':
      return { input: state.input + action.operator };
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
