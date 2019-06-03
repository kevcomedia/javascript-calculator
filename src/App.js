import React, { useReducer } from 'react';
import Display from './Display';
import CalculatorButtons from './CalculatorButtons';
import './App.css';

const initialState = { input: '0' };

function reducer(state, action) {
  switch (action.type) {
    case 'digit':
      return { input: state.input + action.value };
    case 'operator':
      return { input: state.input + action.operator };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Display display={state.input} />
      <CalculatorButtons dispatch={dispatch} />
    </div>
  );
}

export default App;
